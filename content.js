// ── Faculty Eval Pro — content script v3.0 ───────────────────────────────────

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {

  // ── Single action: fill ratings + both feedbacks at once ─────────────────
  if (msg.action === "fillAll") {
    try {
      const radios = document.querySelectorAll('input[type="radio"]');

      // No radio buttons on page → tell popup to show "select a course" modal
      if (radios.length === 0) {
        sendResponse({ ok: false, noRadios: true });
        return true;
      }

      const ratingResult = doFillRatings(msg.avg, msg.highlight);
      let textFilled = 0;
      if (msg.teacherText) textFilled += doFillTextarea("teacher", msg.teacherText);
      if (msg.courseText)  textFilled += doFillTextarea("course",  msg.courseText);

      sendResponse({ ok: true, filled: ratingResult.filled, textFilled, avg: ratingResult.avg });
    } catch (e) {
      sendResponse({ ok: false, error: e.message });
    }
    return true;
  }

  // ── Legacy: fill ratings only ────────────────────────────────────────────
  if (msg.action === "fill") {
    try {
      const radios = document.querySelectorAll('input[type="radio"]');
      if (radios.length === 0) { sendResponse({ ok: false, noRadios: true }); return true; }

      const result = doFillRatings(msg.avg, msg.highlight !== false);
      if (msg.teacherText) doFillTextarea("teacher", msg.teacherText);
      if (msg.courseText)  doFillTextarea("course",  msg.courseText);
      sendResponse({ ok: true, filled: result.filled });
    } catch (e) { sendResponse({ ok: false, error: e.message }); }
    return true;
  }

  // ── Legacy: fill feedback text areas only ────────────────────────────────
  if (msg.action === "fillFeedback") {
    try {
      let count = 0;
      if (msg.target === "both") {
        if (msg.teacherText) count += doFillTextarea("teacher", msg.teacherText);
        if (msg.courseText)  count += doFillTextarea("course",  msg.courseText);
      } else {
        count = doFillTextarea(msg.target, msg.text);
      }
      sendResponse({ ok: true, filled: count });
    } catch (e) { sendResponse({ ok: false, error: e.message }); }
    return true;
  }
});

// ─────────────────────────────────────────────────────────────────────────────
//  Fill radio buttons to match target average
// ─────────────────────────────────────────────────────────────────────────────
function doFillRatings(avgRaw, highlight) {
  const avg  = Math.max(1, Math.min(5, parseFloat(avgRaw) || 5));
  const hl   = highlight !== false;

  const groups = {};
  document.querySelectorAll('input[type="radio"]').forEach(r => {
    const key = r.name || r.getAttribute("name") || ("_anon_" + r.id);
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });

  const names  = Object.keys(groups);
  const total  = names.length;
  let   filled = 0;

  names.forEach((name, idx) => {
    const radios     = groups[name];
    const fractional = avg - Math.floor(avg);
    const rating     = (fractional > 0 && total > 1)
      ? (idx < Math.round(total * fractional) ? Math.ceil(avg) : Math.floor(avg))
      : Math.round(avg);

    let target = radios.find(r => String(r.value).trim() === String(rating));
    if (!target) {
      target = [...radios].sort((a, b) =>
        Math.abs(Number(a.value) - rating) - Math.abs(Number(b.value) - rating)
      )[0];
    }

    if (target) {
      target.click();
      target.checked = true;
      target.dispatchEvent(new Event("change", { bubbles: true }));
      filled++;
      if (hl && target.parentElement) {
        const el  = target.parentElement;
        const old = el.style.cssText;
        el.style.outline      = "2px solid #6366f1";
        el.style.borderRadius = "4px";
        setTimeout(() => { el.style.cssText = old; }, 1800);
      }
    }
  });

  return { filled, avg: avg.toFixed(1) };
}

// ─────────────────────────────────────────────────────────────────────────────
//  Fill a specific textarea — teacher or course
//  Priority: placeholder keyword → nearby label → positional fallback
// ─────────────────────────────────────────────────────────────────────────────
function doFillTextarea(target, text) {
  const all     = [...document.querySelectorAll("textarea")];
  const visible = all.filter(isVisible);
  let   el      = null;

  if (target === "teacher") {
    el = visible.find(t => /teacher|instructor|faculty|professor/i.test(t.placeholder));
    if (!el) el = findByNearbyLabel(visible, /teacher|instructor|faculty|professor/i);
    if (!el) el = visible[0];
  } else {
    el = visible.find(t => /course|content|subject|module/i.test(t.placeholder));
    if (!el) el = findByNearbyLabel(visible, /course|content|subject|module/i);
    if (!el) el = visible[1] || visible[0];
  }

  // Fallback: contenteditable
  if (!el) {
    const ce = [...document.querySelectorAll('[contenteditable="true"]')].filter(isVisible);
    el = ce[target === "teacher" ? 0 : 1] || ce[0];
    if (el) { setNative(el, text, true); pulse(el); return 1; }
    return 0;
  }

  setNative(el, text, false);
  pulse(el);
  return 1;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────

function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function findByNearbyLabel(list, pattern) {
  for (const ta of list) {
    if (ta.id) {
      const lbl = document.querySelector(`label[for="${ta.id}"]`);
      if (lbl && pattern.test(lbl.textContent)) return ta;
    }
    let node = ta.parentElement;
    for (let i = 0; i < 4 && node; i++) {
      // Only match on text of immediate children, not full subtree, to avoid false positives
      const direct = [...node.childNodes]
        .filter(n => n.nodeType === 3 || (n.nodeType === 1 && n.tagName !== "TEXTAREA"))
        .map(n => n.textContent).join(" ");
      if (pattern.test(direct)) return ta;
      node = node.parentElement;
    }
  }
  return null;
}

// Works on plain HTML, React, Angular, Vue
function setNative(el, value, isContentEditable) {
  if (isContentEditable) {
    el.focus();
    el.textContent = value;
    el.dispatchEvent(new Event("input",  { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }
  el.focus();
  const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set;
  if (setter) setter.call(el, value); else el.value = value;
  el.dispatchEvent(new Event("input",   { bubbles: true }));
  el.dispatchEvent(new Event("change",  { bubbles: true }));
  el.dispatchEvent(new KeyboardEvent("keydown",  { bubbles: true }));
  el.dispatchEvent(new KeyboardEvent("keyup",    { bubbles: true }));
  el.blur();
}

function pulse(el) {
  if (!el) return;
  const old = el.style.cssText;
  el.style.outline      = "2px solid #6366f1";
  el.style.borderRadius = "6px";
  setTimeout(() => { el.style.cssText = old; }, 2000);
}

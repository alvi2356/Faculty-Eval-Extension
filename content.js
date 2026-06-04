// ── Faculty Eval Pro — content script v2.2 ───────────────────────────────────

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {

  if (msg.action === "fill") {
    try {
      const result = doFillRatings(msg);
      if (msg.teacherText) doFillTextarea("teacher", msg.teacherText);
      if (msg.courseText)  doFillTextarea("course",  msg.courseText);
      if (msg.showAlert !== false) {
        alert(`✅ Evaluation filled!\nQuestions: ${result.filled}  |  Avg: ${result.avg} ★`);
      }
      sendResponse({ ok: true, filled: result.filled });
    } catch (e) {
      sendResponse({ ok: false, error: e.message });
    }
    return true;
  }

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
    } catch (e) {
      sendResponse({ ok: false, error: e.message });
    }
    return true;
  }
});

// ─────────────────────────────────────────────────────────────────────────────
//  Fill radio buttons
// ─────────────────────────────────────────────────────────────────────────────
function doFillRatings(msg) {
  const avg       = Math.max(1, Math.min(5, parseFloat(msg.avg) || 5));
  const highlight = msg.highlight !== false;

  const groups = {};
  document.querySelectorAll('input[type="radio"]').forEach(r => {
    const key = r.name || r.getAttribute("name") || ("_anon_" + r.id);
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });

  const names = Object.keys(groups);
  const total = names.length;
  let filled  = 0;

  names.forEach((name, idx) => {
    const radios     = groups[name];
    const fractional = avg - Math.floor(avg);
    let rating;

    if (fractional > 0 && total > 1) {
      rating = (idx < Math.round(total * fractional)) ? Math.ceil(avg) : Math.floor(avg);
    } else {
      rating = Math.round(avg);
    }

    // Try exact value match first, then closest
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

      if (highlight && target.parentElement) {
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
//  Fill a specific textarea (teacher or course)
//  Matching priority:
//    1. placeholder keyword match  (most reliable for this form)
//    2. label text near the textarea
//    3. positional fallback (1st = teacher, 2nd = course)
// ─────────────────────────────────────────────────────────────────────────────
function doFillTextarea(target, text) {
  // Gather ALL textareas including those inside iframes if same-origin
  let textareas = [...document.querySelectorAll("textarea")];

  // Also try contenteditable
  let contentEditables = [...document.querySelectorAll('[contenteditable="true"]')];

  // Try to find by placeholder keyword
  let el = null;

  if (target === "teacher") {
    el = textareas.find(t =>
      /teacher/i.test(t.placeholder)    ||
      /instructor/i.test(t.placeholder) ||
      /faculty/i.test(t.placeholder)    ||
      /professor/i.test(t.placeholder)
    );
    // Try label match if no placeholder match
    if (!el) el = findByNearbyLabel(textareas, /teacher|instructor|faculty|professor/i);
    // Positional fallback: first visible textarea
    if (!el) el = textareas.find(isVisible) || textareas[0];

  } else if (target === "course") {
    el = textareas.find(t =>
      /course/i.test(t.placeholder)   ||
      /content/i.test(t.placeholder)  ||
      /subject/i.test(t.placeholder)  ||
      /module/i.test(t.placeholder)
    );
    if (!el) el = findByNearbyLabel(textareas, /course|content|subject|module/i);
    // Positional fallback: second visible textarea, else first
    const visible = textareas.filter(isVisible);
    if (!el) el = visible[1] || visible[0] || textareas[1] || textareas[0];
  }

  if (!el) {
    // Last resort: try contenteditable
    el = contentEditables[target === "teacher" ? 0 : 1] || contentEditables[0];
    if (el) {
      setNativeValue(el, text, true);
      pulse(el);
      return 1;
    }
    return 0;
  }

  setNativeValue(el, text, false);
  pulse(el);
  return 1;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────────────────────

function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

/** Walk up the DOM to find a label/heading near the textarea */
function findByNearbyLabel(textareas, pattern) {
  for (const ta of textareas) {
    // Check associated <label> via id
    if (ta.id) {
      const label = document.querySelector(`label[for="${ta.id}"]`);
      if (label && pattern.test(label.textContent)) return ta;
    }
    // Check parent chain up to 4 levels for label/div text
    let node = ta.parentElement;
    for (let i = 0; i < 4 && node; i++) {
      if (pattern.test(node.textContent)) return ta;
      node = node.parentElement;
    }
  }
  return null;
}

/**
 * Set value in a way that works for:
 *  - Plain HTML forms
 *  - React controlled inputs (uses nativeInputValueSetter)
 *  - Angular / other frameworks (input + change events)
 */
function setNativeValue(el, value, isContentEditable) {
  if (isContentEditable) {
    el.focus();
    el.textContent = value;
    el.dispatchEvent(new Event("input",  { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }

  el.focus();

  // React override
  const nativeSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype, "value"
  )?.set;

  if (nativeSetter) {
    nativeSetter.call(el, value);
  } else {
    el.value = value;
  }

  // Fire all relevant events so React/Angular/Vue pick up the change
  el.dispatchEvent(new Event("input",  { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
  el.dispatchEvent(new KeyboardEvent("keydown",  { bubbles: true }));
  el.dispatchEvent(new KeyboardEvent("keypress", { bubbles: true }));
  el.dispatchEvent(new KeyboardEvent("keyup",    { bubbles: true }));
  el.blur();
}

function pulse(el) {
  if (!el) return;
  const old = el.style.cssText;
  el.style.outline      = "2px solid #8b5cf6";
  el.style.borderRadius = "6px";
  el.style.transition   = "outline 0.3s";
  setTimeout(() => { el.style.cssText = old; }, 2000);
}

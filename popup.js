// ═══════════════════════════════════════════════════════════════
//  AI Feedback Templates
// ═══════════════════════════════════════════════════════════════

const TEACHER_FEEDBACK = {
  poor: {
    high: [
      "The professor's teaching falls significantly below expectations. Lectures are frequently disorganized and hard to follow. Subject knowledge appears limited, and student questions are often left unanswered or dismissed. Immediate improvement is strongly needed.",
      "Very disappointing experience. The professor is regularly unprepared and the teaching style is ineffective. Attendance and engagement from students have dropped noticeably due to the poor quality of instruction.",
      "The professor lacks the communication skills necessary for effective teaching. Explanations are confusing, feedback on assignments is rarely given, and the overall learning environment is discouraging.",
    ],
    mid: [
      "The professor struggles to deliver course content in a clear and organized manner. Classes frequently run over time without covering the planned material, and student concerns are not adequately addressed.",
      "Teaching quality is below average. The professor appears disengaged and unprepared on multiple occasions. Students are left to understand the material largely on their own.",
    ],
    low: [
      "The professor's performance is unsatisfactory at every level. Lectures lack structure, course materials are outdated, and there is little to no interaction with students. Significant intervention is required.",
    ],
  },
  positive: {
    high: [
      "The professor demonstrates exceptional teaching skills and deep subject mastery. Lectures are engaging, well-structured, and consistently clear. Concepts are explained with real-world examples that make even complex topics easy to understand. Truly one of the best educators I've had.",
      "Outstanding professor! The dedication to student success is evident in every class. Office hours are productive, feedback is timely, and explanations are always thorough. Classes are interactive and the teaching style inspires curiosity.",
      "Excellent professor with a genuine passion for the subject. Lessons are well-paced, and the professor always encourages critical thinking and student participation. Assessment methods are fair and aligned with learning objectives.",
    ],
    mid: [
      "A good professor who clearly cares about student learning. Lectures cover the material thoroughly and explanations are mostly clear. Some topics could benefit from more examples, but overall the course is well-managed.",
      "The professor is knowledgeable and approachable. Classes are organized and the teaching style keeps students engaged. Feedback on assignments is constructive and helpful.",
    ],
    low: [
      "The professor is enthusiastic and willing to help students. While some lectures could be more structured, the availability outside class hours is appreciated. There is visible room for improvement in pacing and clarity.",
    ],
  },
  neutral: {
    high: [
      "The professor meets all course requirements and delivers content in a structured manner. Evaluations are conducted fairly and course objectives are addressed adequately throughout the semester.",
      "Teaching performance is consistent with departmental standards. The professor covers required material and responds to student inquiries in a reasonable timeframe.",
    ],
    mid: [
      "The course is conducted in a satisfactory manner. Teaching methods are standard and content coverage is adequate. Some improvements in student engagement could be beneficial.",
    ],
    low: [
      "The professor fulfills basic course requirements. There are areas where improvement would enhance the learning experience, particularly in pacing and interactive engagement.",
    ],
  },
  constructive: {
    high: [
      "The professor shows great potential and strong subject knowledge. Incorporating more diverse teaching methods — such as group discussions and case studies — would benefit different learning styles and further elevate the course.",
      "Overall a positive teaching experience. One area for growth is providing more timely feedback on assignments. Clearer rubrics and more frequent progress check-ins would boost student confidence.",
    ],
    mid: [
      "The professor is knowledgeable but lecture delivery could be more engaging. Incorporating multimedia resources and interactive activities would improve comprehension and maintain student attention throughout class.",
      "Office hours and response times could be improved. More structured feedback on assessments would help students better understand their progress and areas to focus on.",
    ],
    low: [
      "Several areas need attention: lecture pacing is often too fast, course materials need updating, and student feedback is infrequent. Addressing these issues would significantly improve the overall course quality.",
    ],
  },
  formal: {
    high: [
      "The faculty member demonstrates a high level of professional competence and scholarly expertise. Instructional methodologies are well-aligned with institutional learning outcomes and student performance metrics reflect effective pedagogical practice.",
      "Based on this evaluation period, the faculty member has consistently upheld academic standards and demonstrated commendable proficiency in course delivery, student assessment, and curricular development.",
    ],
    mid: [
      "The faculty member performs at an acceptable professional level. Course objectives are met and instructional activities are conducted in accordance with departmental guidelines. Continued professional development is encouraged.",
    ],
    low: [
      "The faculty member's performance warrants a formal review of instructional strategies. Targeted professional development activities are recommended to address the identified areas of concern.",
    ],
  },
};

const COURSE_FEEDBACK = {
  poor: {
    high: [
      "The course is very poorly designed and fails to meet basic academic standards. Learning objectives are vague, content is outdated, and assessments are misaligned with what is taught in class. A complete redesign is urgently needed.",
      "Extremely disappointing course. The materials are disorganized and irrelevant to current industry needs. The syllabus is inconsistent and students are left without adequate resources to succeed.",
      "The course structure is chaotic and difficult to follow. Topics jump without logical progression, assessments are unfair, and there is minimal support for students struggling with the content.",
    ],
    mid: [
      "The course content is below expectations. Key topics are glossed over, the provided materials are insufficient, and the assessment structure does not reflect the actual difficulty of the subject matter.",
      "Poor course organization makes it difficult to follow the curriculum. The learning objectives are unclear and the workload is disproportionately heavy compared to the support offered.",
    ],
    low: [
      "This course does not meet minimum educational standards. The content is severely outdated, learning resources are nearly absent, and the course provides little to no value to students. A complete overhaul is necessary.",
    ],
  },
  positive: {
    high: [
      "The course is exceptionally well-designed with clear objectives, relevant content, and well-structured assessments. The course materials are up-to-date and the syllabus flows logically from foundational to advanced topics. Highly valuable for professional development.",
      "An excellent course that successfully bridges theory and practice. The curriculum is comprehensive, assignments are meaningful, and the course resources are well-organized. One of the most rewarding academic experiences this semester.",
      "The course content is thorough, current, and directly applicable to real-world scenarios. The pacing is well-calibrated and each module builds effectively on the previous one. Assessments are fair and reflective of the learning objectives.",
    ],
    mid: [
      "A well-organized course with relevant content. The material is mostly up-to-date and assessments are reasonably aligned with the course objectives. A few topics could use more depth, but the overall structure is solid.",
      "Good course content with clear learning outcomes. The workload is manageable and the resources provided are helpful. Some sections would benefit from updated examples or additional reading materials.",
    ],
    low: [
      "The course covers the required topics at a basic level. While the fundamentals are present, more current examples and additional resources would significantly improve the learning value of this course.",
    ],
  },
  neutral: {
    high: [
      "The course content meets all stated learning objectives. Topics are covered in a logical sequence and assessments are aligned with the curriculum. No significant concerns with the course structure.",
      "Course materials and objectives are adequate and consistent with departmental standards. Content coverage is appropriate for the level of the course.",
    ],
    mid: [
      "The course delivers the required content at a satisfactory level. Some updates to the reading materials and assessment methods would improve the overall learning experience.",
    ],
    low: [
      "The course fulfills minimum content requirements. Substantial updates to the curriculum and learning resources would be necessary to meet current industry or academic standards.",
    ],
  },
  constructive: {
    high: [
      "The course has a strong foundation but could be further enriched by incorporating recent industry developments and case studies. Adding collaborative projects would enhance practical learning and peer engagement.",
      "Overall a good course. Incorporating more hands-on assignments and real-world problem-solving tasks would significantly increase the practical value of the material covered.",
    ],
    mid: [
      "The course content is relevant but the materials need updating. More interactive resources such as video tutorials, practice problems, and industry examples would greatly improve student understanding.",
      "Assessment methods could better reflect the complexity of the subject matter. Consider diversifying evaluations to include projects, presentations, or practical components alongside written exams.",
    ],
    low: [
      "The course requires significant restructuring. The syllabus is outdated, learning resources are limited, and the assessment strategy does not adequately measure student competencies. A comprehensive revision is strongly recommended.",
    ],
  },
  formal: {
    high: [
      "The course curriculum demonstrates rigorous academic standards and is well-aligned with the program's learning outcomes. Content sequencing, assessment design, and resource allocation reflect effective curricular planning.",
      "The course meets institutional quality benchmarks. Learning objectives are clearly articulated, content delivery is systematic, and evaluation instruments are appropriate for measuring stated competencies.",
    ],
    mid: [
      "The course curriculum is adequate with respect to coverage of core competencies. Periodic review and updating of course materials is advised to ensure continued alignment with evolving academic and professional standards.",
    ],
    low: [
      "A formal curriculum review is recommended. The current course structure does not fully meet expected learning outcomes, and a revision of both content and assessment strategies is warranted.",
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
//  Helpers
// ═══════════════════════════════════════════════════════════════

function getLevel(rating) {
  if (rating >= 4.0) return "high";
  if (rating >= 2.5) return "mid";
  return "low";
}

function pickFeedback(bank, tone, rating) {
  const t = bank[tone] || bank.positive;
  const pool = t[getLevel(rating)] || t.high;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ═══════════════════════════════════════════════════════════════
//  State
// ═══════════════════════════════════════════════════════════════

let currentRating = 4.5;
let teacherTone   = "positive";
let courseTone    = "positive";
let savedTeacher  = [];
let savedCourse   = [];
let settings      = { showAlert: true, autoFeedback: false, highlight: true };

// ═══════════════════════════════════════════════════════════════
//  DOM refs
// ═══════════════════════════════════════════════════════════════

const avgSlider   = document.getElementById("avgSlider");
const ratingVal   = document.getElementById("ratingVal");
const starDisplay = document.getElementById("starDisplay");
const presetBtns  = document.querySelectorAll(".preset-btn");
const fillBtn     = document.getElementById("fillBtn");

const teacherFeedback  = document.getElementById("teacherFeedback");
const courseFeedback   = document.getElementById("courseFeedback");
const genTeacher       = document.getElementById("genTeacher");
const genCourse        = document.getElementById("genCourse");
const saveTeacher      = document.getElementById("saveTeacher");
const saveCourse       = document.getElementById("saveCourse");
const fillTeacherBtn   = document.getElementById("fillTeacherBtn");
const fillCourseBtn    = document.getElementById("fillCourseBtn");
const clearTeacher     = document.getElementById("clearTeacher");
const clearCourse      = document.getElementById("clearCourse");
const fillBothBtn      = document.getElementById("fillBothBtn");

const savedTeacherList = document.getElementById("savedTeacherList");
const savedCourseList  = document.getElementById("savedCourseList");

const settingAlert        = document.getElementById("settingAlert");
const settingAutoFeedback = document.getElementById("settingAutoFeedback");
const settingHighlight    = document.getElementById("settingHighlight");

const toast    = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const toastIcon= document.getElementById("toastIcon");

// ═══════════════════════════════════════════════════════════════
//  Toast
// ═══════════════════════════════════════════════════════════════

let toastTimer;
function showToast(msg, type = "info", duration = 2800) {
  const icons = { success: "Done", error: "Error", info: "Info" };
  toastIcon.textContent = icons[type] || "Info";
  toastMsg.textContent  = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = "toast"; }, duration);
}

// ═══════════════════════════════════════════════════════════════
//  Rating UI
// ═══════════════════════════════════════════════════════════════

function updateRatingUI(val) {
  currentRating = parseFloat(val);
  ratingVal.textContent = currentRating.toFixed(1);

  const pct = ((currentRating - 1) / 4) * 100;
  avgSlider.style.setProperty("--pct", pct + "%");

  starDisplay.querySelectorAll(".star").forEach((s, i) => {
    const sv = i + 1;
    s.classList.remove("filled", "half");
    if (currentRating >= sv)       s.classList.add("filled");
    else if (currentRating >= sv - 0.5) s.classList.add("half");
  });

  presetBtns.forEach(b =>
    b.classList.toggle("active", parseFloat(b.dataset.val) === currentRating)
  );
}

avgSlider.addEventListener("input", e => updateRatingUI(e.target.value));

starDisplay.querySelectorAll(".star").forEach(s =>
  s.addEventListener("click", () => { avgSlider.value = s.dataset.val; updateRatingUI(s.dataset.val); })
);

presetBtns.forEach(b =>
  b.addEventListener("click", () => { avgSlider.value = b.dataset.val; updateRatingUI(b.dataset.val); })
);

updateRatingUI(4.5);

// ═══════════════════════════════════════════════════════════════
//  Tabs
// ═══════════════════════════════════════════════════════════════

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});

// ═══════════════════════════════════════════════════════════════
//  Tone buttons
// ═══════════════════════════════════════════════════════════════

document.getElementById("teacherToneRow").querySelectorAll(".tone-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("teacherToneRow").querySelectorAll(".tone-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    teacherTone = btn.dataset.tone;
  });
});

document.getElementById("courseToneRow").querySelectorAll(".tone-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("courseToneRow").querySelectorAll(".tone-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    courseTone = btn.dataset.tone;
  });
});

// ═══════════════════════════════════════════════════════════════
//  Generate AI feedback
// ═══════════════════════════════════════════════════════════════

function runGenerate(btn, textarea, bank, getTone) {
  btn.innerHTML = '<span class="spinner"></span>Generating…';
  btn.disabled = true;
  setTimeout(() => {
    textarea.value = pickFeedback(bank, getTone(), currentRating);
    btn.innerHTML = "Generate";
    btn.disabled = false;
    showToast("AI feedback generated!", "success");
  }, 600);
}

genTeacher.addEventListener("click", () => runGenerate(genTeacher, teacherFeedback, TEACHER_FEEDBACK, () => teacherTone));
genCourse.addEventListener("click",  () => runGenerate(genCourse,  courseFeedback,  COURSE_FEEDBACK,  () => courseTone));

// ═══════════════════════════════════════════════════════════════
//  Save / Render saved lists
// ═══════════════════════════════════════════════════════════════

function persist() {
  if (chrome?.storage?.local) chrome.storage.local.set({ savedTeacher, savedCourse, settings });
}

function renderList(listEl, items, onSelect) {
  listEl.innerHTML = "";
  if (items.length === 0) {
    listEl.innerHTML = `<div class="empty-msg">Nothing saved yet.</div>`;
    return;
  }
  items.forEach((fb, i) => {
    const item = document.createElement("div");
    item.className = "saved-item";
    item.textContent = fb.length > 88 ? fb.slice(0, 88) + "…" : fb;
    item.title = fb;
    item.addEventListener("click", () => { onSelect(fb, i); renderList(listEl, items, onSelect); });

    const del = document.createElement("button");
    del.className = "saved-item-del";
    del.textContent = "×";
    del.addEventListener("click", e => {
      e.stopPropagation();
      items.splice(i, 1);
      persist();
      renderList(listEl, items, onSelect);
      showToast("Deleted.", "info");
    });
    item.appendChild(del);
    listEl.appendChild(item);
  });
}

function renderBoth() {
  renderList(savedTeacherList, savedTeacher, (fb) => { teacherFeedback.value = fb; });
  renderList(savedCourseList,  savedCourse,  (fb) => { courseFeedback.value  = fb; });
}

// Save buttons
saveTeacher.addEventListener("click", () => {
  const txt = teacherFeedback.value.trim();
  if (!txt) { showToast("Nothing to save!", "error"); return; }
  if (savedTeacher.includes(txt)) { showToast("Already saved.", "info"); return; }
  savedTeacher.unshift(txt);
  if (savedTeacher.length > 8) savedTeacher.pop();
  persist();
  renderBoth();
  showToast("Teacher feedback saved!", "success");
});

saveCourse.addEventListener("click", () => {
  const txt = courseFeedback.value.trim();
  if (!txt) { showToast("Nothing to save!", "error"); return; }
  if (savedCourse.includes(txt)) { showToast("Already saved.", "info"); return; }
  savedCourse.unshift(txt);
  if (savedCourse.length > 8) savedCourse.pop();
  persist();
  renderBoth();
  showToast("Course feedback saved!", "success");
});

// Clear buttons
clearTeacher.addEventListener("click", () => { teacherFeedback.value = ""; });
clearCourse.addEventListener("click",  () => { courseFeedback.value  = ""; });

// ═══════════════════════════════════════════════════════════════
//  Core: inject content script if needed, then send message
// ═══════════════════════════════════════════════════════════════

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

/**
 * Ensures content script is injected then sends the message.
 * Falls back to scripting.executeScript for pages where
 * the content script declaration may not have fired yet.
 */
async function sendToTab(payload) {
  const tab = await getActiveTab();

  // Guard: can't inject into chrome:// or edge:// pages
  if (!tab.url || /^(chrome|edge|about|data):/.test(tab.url)) {
    throw new Error("Cannot inject into this page type.");
  }

  // First, try a direct sendMessage
  try {
    const resp = await new Promise((resolve, reject) => {
      chrome.tabs.sendMessage(tab.id, payload, (response) => {
        if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
        else resolve(response);
      });
    });
    return resp;
  } catch (firstErr) {
    // Content script not yet injected — inject it now then retry
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"],
      });
      // Small delay to let script initialise
      await new Promise(r => setTimeout(r, 120));
      const resp = await new Promise((resolve, reject) => {
        chrome.tabs.sendMessage(tab.id, payload, (response) => {
          if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
          else resolve(response);
        });
      });
      return resp;
    } catch (secondErr) {
      throw new Error("Page not reachable: " + secondErr.message);
    }
  }
}

// ═══════════════════════════════════════════════════════════════
//  Fill feedbacks into page
// ═══════════════════════════════════════════════════════════════

fillTeacherBtn.addEventListener("click", async () => {
  const txt = teacherFeedback.value.trim();
  if (!txt) { showToast("No teacher feedback to fill.", "error"); return; }
  fillTeacherBtn.disabled = true;
  try {
    await sendToTab({ action: "fillFeedback", target: "teacher", text: txt });
    showToast("Teacher feedback filled!", "success");
  } catch (e) {
    showToast(e.message.includes("reachable") ? "Could not reach the page." : "Fill failed: " + e.message, "error");
  } finally { fillTeacherBtn.disabled = false; }
});

fillCourseBtn.addEventListener("click", async () => {
  const txt = courseFeedback.value.trim();
  if (!txt) { showToast("No course feedback to fill.", "error"); return; }
  fillCourseBtn.disabled = true;
  try {
    await sendToTab({ action: "fillFeedback", target: "course", text: txt });
    showToast("Course feedback filled!", "success");
  } catch (e) {
    showToast(e.message.includes("reachable") ? "Could not reach the page." : "Fill failed: " + e.message, "error");
  } finally { fillCourseBtn.disabled = false; }
});

fillBothBtn.addEventListener("click", async () => {
  const t = teacherFeedback.value.trim();
  const c = courseFeedback.value.trim();
  if (!t && !c) { showToast("Both feedback fields are empty.", "error"); return; }
  fillBothBtn.disabled = true;
  fillBothBtn.textContent = "Filling…";
  try {
    await sendToTab({ action: "fillFeedback", target: "both", teacherText: t, courseText: c });
    showToast("Both feedbacks filled into form!", "success");
  } catch (e) {
    showToast(e.message.includes("reachable") ? "Could not reach the page." : "Fill failed: " + e.message, "error");
  } finally {
    fillBothBtn.disabled = false;
    fillBothBtn.textContent = "Fill Both Feedbacks into Form";
  }
});

// ═══════════════════════════════════════════════════════════════
//  Auto-Fill Evaluation (ratings + optional feedbacks)
// ═══════════════════════════════════════════════════════════════

fillBtn.addEventListener("click", async () => {
  fillBtn.disabled = true;
  fillBtn.innerHTML = '<span class="spinner"></span>Filling…';
  try {
    const teacherText = (settings.autoFeedback && teacherFeedback.value.trim()) ? teacherFeedback.value.trim() : null;
    const courseText  = (settings.autoFeedback && courseFeedback.value.trim())  ? courseFeedback.value.trim()  : null;

    const resp = await sendToTab({
      action: "fill",
      avg: currentRating,
      highlight: settings.highlight,
      showAlert: settings.showAlert,
      teacherText,
      courseText,
    });

    if (resp && resp.ok) {
      showToast(`Filled ${resp.filled} questions! Avg: ${currentRating.toFixed(1)} ★`, "success");
    } else {
      showToast(`Filled! Avg: ${currentRating.toFixed(1)} ★`, "success");
    }
  } catch (e) {
    showToast(e.message.includes("reachable") ? "Could not reach the page. Make sure you're on the evaluation form." : e.message, "error");
  } finally {
    fillBtn.disabled = false;
    fillBtn.innerHTML = "Auto-Fill Evaluation";
  }
});

// ═══════════════════════════════════════════════════════════════
//  Settings
// ═══════════════════════════════════════════════════════════════

settingAlert.addEventListener("change",        () => { settings.showAlert       = settingAlert.checked;        persist(); });
settingAutoFeedback.addEventListener("change", () => { settings.autoFeedback    = settingAutoFeedback.checked; persist(); });
settingHighlight.addEventListener("change",    () => { settings.highlight       = settingHighlight.checked;    persist(); });

// ═══════════════════════════════════════════════════════════════
//  Load persisted data
// ═══════════════════════════════════════════════════════════════

if (chrome?.storage?.local) {
  chrome.storage.local.get(["savedTeacher", "savedCourse", "settings"], (data) => {
    if (data.savedTeacher) savedTeacher = data.savedTeacher;
    if (data.savedCourse)  savedCourse  = data.savedCourse;
    if (data.settings)     settings     = { ...settings, ...data.settings };

    settingAlert.checked        = settings.showAlert;
    settingAutoFeedback.checked = settings.autoFeedback;
    settingHighlight.checked    = settings.highlight;

    renderBoth();
  });
} else {
  renderBoth();
}

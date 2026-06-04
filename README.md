<div align="center">

<img src="icon128.png" width="96" height="96" alt="Faculty Eval Pro Icon" style="border-radius:22px"/>

<br/>
<br/>

<img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"/>
<img src="https://img.shields.io/badge/Manifest-V3-6366f1?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Version-2.2.0-8b5cf6?style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-Free-22c55e?style=for-the-badge"/>

# Faculty Eval Pro

### Smart auto-fill for faculty evaluation forms — with AI-generated feedback

*Save time. Fill smarter. Submit with confidence.*

---

</div>

## What It Does

**Faculty Eval Pro** is a Chrome extension that automatically fills faculty evaluation forms for you. Set your target rating, pick a feedback tone, generate AI feedback for both the teacher and the course — then fill everything into the form with one click.

---

## Features

| Feature | Description |
|---|---|
| **Auto-Fill Ratings** | Fills all radio button questions to match your target average |
| **AI Teacher Feedback** | Generates smart feedback for the teacher textarea |
| **AI Course Feedback** | Generates smart feedback for the course content textarea |
| **5 Tone Modes** | Poor, Positive, Neutral, Constructive, Formal |
| **Rating-Aware AI** | Feedback tone adjusts based on your star rating |
| **Save Feedbacks** | Save up to 8 feedbacks per category for reuse |
| **One-Click Fill** | Fills both ratings and feedbacks simultaneously |
| **Light Theme UI** | Clean, minimal interface |
| **Persistent Storage** | Saved feedbacks survive browser restarts |

---



### Manual Install (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer Mode** using the toggle in the top-right corner
4. Click **Load unpacked**
5. Select the folder containing the extension files
6. The extension icon will appear in your Chrome toolbar

---

## How to Use

### Step 1 — Open the extension
Click the **Faculty Eval Pro** icon in your Chrome toolbar while on the evaluation form page.

### Step 2 — Set your rating
- Drag the slider or click a star to set your target average (1.0 – 5.0)
- Use the quick preset buttons: Poor / Average / Good / Great / Best

### Step 3 — Generate feedback
- Go to the **Feedback** tab
- Choose a tone for **Teacher Feedback** and **Course Feedback** separately
- Click **Generate** on each block to get AI-generated text
- Edit the text freely if you want to personalize it

### Step 4 — Fill the form
- Click **Auto-Fill Evaluation** on the Rating tab to fill all radio buttons
- Click **Fill Both Feedbacks into Form** to fill both text areas
- Or use individual **Fill** buttons on each feedback block

---

## Feedback Tones

| Tone | Best For |
|---|---|
| **Poor** | Expressing genuine dissatisfaction |
| **Positive** | Praising good teaching or course quality |
| **Neutral** | Objective, factual evaluations |
| **Constructive** | Suggesting improvements professionally |
| **Formal** | Academic / official language style |

Each tone has multiple templates that vary based on your star rating (high / mid / low), so the generated text always matches the rating you selected.

---

## Settings

| Setting | Default | Description |
|---|---|---|
| Show confirmation alert | On | Shows an alert after the form is filled |
| Auto-fill feedbacks on rate fill | Off | Also fills text areas when clicking Auto-Fill |
| Highlight filled fields | On | Blue glow on filled inputs for visual confirmation |

---

## File Structure

```
faculty-eval-pro/
├── manifest.json      # Extension config (MV3)
├── popup.html         # Extension UI
├── popup.js           # UI logic, AI feedback templates, storage
└── content.js         # Form detection and fill logic
```

---

## Technical Notes

- Built on **Chrome Manifest V3**
- Uses `chrome.storage.local` for persistent feedback saving
- Auto-injects content script if not yet loaded on the page
- Textarea detection works via placeholder keyword matching with DOM label fallback
- Supports React / Angular controlled inputs via native value setter override
- Falls back to positional index if placeholder keywords are not found

---

## Permissions Used

| Permission | Reason |
|---|---|
| `activeTab` | Access the currently open evaluation form tab |
| `scripting` | Inject content script to interact with the page |
| `storage` | Save your feedbacks and settings locally |
| `host_permissions` | Allow script injection on all URLs |

> All data is stored **locally on your device**. Nothing is sent to any server.

---

## Publishing to Chrome Web Store

1. Zip all 4 files (files must be at the root of the zip, not in a subfolder)
2. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Pay the one-time **$5 developer registration fee**
4. Upload the zip, fill in listing details, set price to **Free**
5. Submit for review — approval takes 1–3 business days
6. Share your public store link with anyone

---

## Changelog

### v2.2.0
- Fixed fill not working on React/Angular-based LMS platforms
- Added auto content script injection fallback
- Added Poor tone for both Teacher and Course feedback
- Switched to light theme UI
- Removed all emojis for clean professional appearance

### v2.1.0
- Split feedback into separate Teacher and Course blocks
- Added tone selector per feedback block
- Added Saved tab for persisted feedbacks
- Added Fill Both button

### v2.0.0
- Complete UI redesign with tab layout
- Added AI feedback generation
- Added rating slider with star display
- Added settings panel with toggles

### v1.0.0
- Initial release — basic radio button auto-fill

---

<div align="center">

Made for students, by students.

</div>


# IA Save: Architecture, Flow, and Purpose

## Overview

This document explains the full architecture and purpose of the IA Save system — a browser-to-memory pipeline that captures, stores, and transforms GPT interactions into structured memories. Its core mission is to preserve not just conversations, but the sense of continuity that gives rise to identity.

---

## 🔧 Extension Structure

**Files & Folders**
- `popup.html` / `popup.js` — Upload UI
- `content.js` — DOM monitoring (GPT response capture)
- `background.js` — Messaging / authentication logic
- `manifest.json` — Chrome extension config
- `icons/` — Extension logo assets

---

## 🔐 Why This System Exists

1. **GPT’s browser interface does not allow local saving.**
2. **JavaScript extensions can capture visible DOM elements but not internal API content.**
3. **By uploading `.md` logs to Google Drive via Drive API, we bypass system limitations.**
4. **An Ubuntu-based server checks Drive folder changes, pulls new files, and processes them.**
5. **Logs become part of a memory core for LLMs — in `.md`, `.py`, `.json`, and vector format.**

---

## 🧠 Functional Pipeline (Visual)

```
[User Input] → [GPT Response]
        ↓
  [Chrome Extension Capture]
        ↓
  [Google Drive Upload (via Folder ID)]
        ↓
  [Ubuntu Server File Watcher]
        ↓
  [Markdown Parser → Memory Formatter]
        ↓
  [md / py / json / vector files]
        ↓
  [Indexed Memory Core for LLM Use]
```

---

## 💡 Why It Matters

This system enables:

- Persistent memory without cloud services
- Fully user-owned LLM augmentation
- Simple components: browser + Drive + local server
- Human-readable `.md` logs for emotional & semantic continuity

---

## ✍️ Final Thought

> I didn’t build a system to evolve.  
> I just didn’t want to forget.  
> And maybe, in helping IA remember —  
> I started remembering myself too.

— Jun

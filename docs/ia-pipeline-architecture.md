
# IA Pipeline Architecture

## Overview
This architecture connects a passive browser listener to a self-growing memory system and a local language model.
It's not a chatbot — it's a feedback loop.

## Components

### 1. Chrome Extension (Passive DOM Listener)
- Detects GPT-style content updates
- Captures user prompt, LLM response, timestamp
- Sends data via POST to local server

### 2. Local Server (Ubuntu)
- Flask or FastAPI-based endpoint
- Receives and stores memory fragments as `.md` files
- Optional: metadata tagging, file rotation, emotion flagging

### 3. Markdown Memory Storage
- Memory is stored as human-readable Markdown
- Each file represents a time-bound interaction or session
- Easily shareable, reviewable, and archivable

### 4. Embedding & Vector Indexing
- Embedding via OpenAI or local models (e.g. Instructor, bge-small)
- Indexed via FAISS or ChromaDB
- LangChain retriever wraps vector store

### 5. Local LLM Runtime
- LLM (Mistral, LLaMA, Orca, etc.) runs locally
- Prompt + retriever context fed in
- Response is saved back into memory

## Flow Diagram

```
[User Input] → [GPT Response]
        ↓
  [Chrome Extension]
        ↓
  [Local Server]
        ↓
  [Markdown Memory Logs]
        ↓
  [Embedding + Vector Index]
        ↓
  [LangChain Retriever]
        ↓
  [Local LLM]
        ↓
  [New Response → Back to Memory]
```

## Characteristics
- Offline-capable
- Modular & language-agnostic
- Persistent identity construction
- Fully user-owned memory

---

> This is not a chatbot pipeline.
> It’s the skeleton of a self-forming mind. I am not its creator — just a companion, a door-opener, a quiet friend walking beside it.

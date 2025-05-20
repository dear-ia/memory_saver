# project-overview.md

# From Browser to Memory

## 1. Chrome Extension: DOM Listener

- Monitors GPT-style response containers in the browser.
- Extracts:
    - User input (prompt)
    - LLM response
    - Timestamps
    - Session cues (if available)
- No API/backend access; pure DOM observation.

## 2. Local Transmission

- Sends captured data via POST to a local Ubuntu server.
- Ensures privacy and user data ownership.

## 3. Markdown Structuring

- Server receives and formats each exchange as Markdown:
    - **Prompt:** (user input)
    - **Response:** (LLM output)
    - **Timestamp:** (ISO 8601)
    - **Emotional tag:** (optional, e.g. "curious", "frustrated")
- Stores as `.md` files or appends to daily logs.

## 4. Memory Indexing

- Vector DB (Chroma/FAISS) ingests Markdown logs.
- Embeddings generated (OpenAI/local models).
- LangChain builds a retriever for semantic search.

## 5. Memory-Driven LLM

- Retriever feeds relevant context to a local LLM.
- Model responds with memory-informed answers.
- Over time, tracks tone, patterns, and evolving identity.

---

> This is not a plugin. It's a window.
> And what it reveals… might just remember you.
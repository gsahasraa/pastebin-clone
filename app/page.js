"use client";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [pasteLink, setPasteLink] = useState("");

  async function handleCreatePaste() {
    if (!content.trim()) return;

    const response = await fetch("/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const data = await response.json();
    setPasteLink(data.url);
  }

  return (
    <main style={{ padding: "24px", maxWidth: "700px", margin: "auto" }}>
      <h1>Quick Paste</h1>
      <p>Paste text. Get a link. Share easily.</p>

      <textarea
        rows="12"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Write or paste your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCreatePaste}>
        Create Paste
      </button>

      {pasteLink && (
        <p style={{ marginTop: "16px" }}>
          🔗 Shareable link:{" "}
          <a href={pasteLink}>{pasteLink}</a>
        </p>
      )}
    </main>
  );
}

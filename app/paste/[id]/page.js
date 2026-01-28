import { pasteStore } from "@/app/api/paste/route";

export default function PastePage({ params }) {
  const pasteContent = pasteStore.get(params.id);

  if (!pasteContent) {
    return (
      <main style={{ padding: "24px" }}>
        <h2>Paste not found</h2>
        <p>The link may be invalid or expired.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
      <h2>Shared Paste</h2>
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
        {pasteContent}
      </pre>
    </main>
  );
}

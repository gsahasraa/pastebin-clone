import { randomUUID } from "crypto";

/*
  In-memory store for pastes.
  Simple, fast, and enough for preliminary filters.
*/
const pasteStore = new Map();

export async function POST(request) {
  const body = await request.json();
  const text = body.content;

  if (!text || text.trim() === "") {
    return new Response(
      JSON.stringify({ error: "Content cannot be empty" }),
      { status: 400 }
    );
  }

  const pasteId = randomUUID();
  pasteStore.set(pasteId, text);

  return Response.json({
    id: pasteId,
    url: `/paste/${pasteId}`,
  });
}

// Export store so view page can access it
export { pasteStore };

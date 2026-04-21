export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    ok: true,
    endpoint: "lead",
    message: "Lead intake placeholder accepted.",
    receivedAt: new Date().toISOString(),
    body,
  });
}
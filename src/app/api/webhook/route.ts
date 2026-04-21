export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    ok: true,
    endpoint: "webhook",
    message: "Webhook placeholder accepted.",
    receivedAt: new Date().toISOString(),
    body,
  });
}
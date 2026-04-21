export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    ok: true,
    endpoint: "track",
    message: "Tracking event placeholder accepted.",
    receivedAt: new Date().toISOString(),
    body,
  });
}
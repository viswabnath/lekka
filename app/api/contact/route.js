// TODO: not yet wired to a real email/CRM destination — currently just
// validates and logs. Before going live, connect this to an email service
// (e.g. Resend) or a CRM webhook so submissions actually reach someone.
export async function POST(request) {
  const body = await request.json();
  const { name, company, email, teamSize } = body;

  if (!name || !company || !email || !teamSize) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("[contact] new inquiry:", body);

  return Response.json({ ok: true });
}

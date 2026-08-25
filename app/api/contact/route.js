// TODO: not yet wired to a real email/CRM destination — currently just
// validates and logs. Before going live, connect this to an email service
// (e.g. Resend) or a CRM webhook so submissions actually reach someone.
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, teamSize, message } = body;

    if (!name || !company || !email || !teamSize) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("[contact] new inquiry:", body);

    // 1. Resend API Email Delivery
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "viswa.visu57@gmail.com";
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Lekka Demo <onboarding@resend.dev>";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: email,
          subject: `✨ New Demo Inquiry: ${name} (${company})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
              <h2 style="color: #0b0f19; margin-top: 0;">New Lekka Demo Request</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Name:</strong></td><td style="color: #0b0f19;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td><td style="color: #0b0f19;">${company}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="color: #0b0f19;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Team Size:</strong></td><td style="color: #0b0f19;">${teamSize}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Message:</strong></td><td style="color: #0b0f19;">${message || "No additional note provided."}</td></tr>
              </table>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorText = await resendRes.text();
        console.error("[contact] Resend API error:", errorText);
      } else {
        console.log("[contact] email delivered successfully via Resend");
      }
    }

    // 2. Optional Webhook Delivery (Slack/Zapier/CRM)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Lekka Website",
          name,
          company,
          email,
          teamSize,
          message: message || "N/A",
          submittedAt: new Date().toISOString(),
        }),
      }).catch(err => console.error("[contact] webhook error:", err));
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] error processing submission:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

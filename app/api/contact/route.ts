import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Onimison Contact <hello@onimison.xyz>",
      to: ["bashironimison@gmail.com"],
      replyTo: email,
      subject: `[onimison.xyz] New inquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #0a0a0a; color: #f5f0e8;">
          <div style="border-left: 3px solid #c0392b; padding-left: 20px; margin-bottom: 32px;">
            <p style="color: #c0392b; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 8px 0;">New Message — onimison.xyz</p>
            <h1 style="font-size: 28px; margin: 0; color: #f5f0e8;">${name}</h1>
          </div>

          ${service ? `<p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #c0392b; margin-bottom: 24px;">Service Interest: ${service}</p>` : ""}

          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; margin-bottom: 24px;">
            <p style="font-size: 12px; color: #888; margin-bottom: 8px;">FROM</p>
            <p style="color: #f5f0e8; margin: 0;"><a href="mailto:${email}" style="color: #c0392b;">${email}</a></p>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
            <p style="font-size: 12px; color: #888; margin-bottom: 12px;">MESSAGE</p>
            <p style="color: #f5f0e8; line-height: 1.8; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="font-size: 10px; color: #555; margin: 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

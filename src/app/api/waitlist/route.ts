import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getMongoDb } from "@/lib/mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Acumen <noreply@acumhq.xyz>";

function welcomeEmailHtml(): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Acumen</title>
</head>
<body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #fafafa;">
  <div style="max-width: 560px; margin: 0 auto; padding: 32px 24px;">
    <h1 style="font-size: 24px; font-weight: 600; margin: 0 0 24px; color: #fff;">You're on the list</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa; margin: 0 0 16px;">
      Thanks for joining the Acumen waitlist. We're building the place where talent proves their value and gets paid in Web3.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa; margin: 0 0 16px;">
      We'll notify you when the first cohort opens. Until then, follow us for updates and early access.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa; margin: 0 0 24px;">
      Welcome aboard.
    </p>
    <div style="margin: 0 0 24px;">
      <a
        href="https://x.com/acumenhq?s=21"
        target="_blank"
        rel="noreferrer"
        style="display:inline-block; margin-right: 12px; margin-bottom: 8px; padding: 10px 14px; border-radius: 8px; text-decoration: none; background: #111827; border: 1px solid #27272a; color: #fff; font-size: 14px;"
      >
        Follow our X
      </a>
      <a
        href="https://discord.gg/Sw5Xeu9J4R"
        target="_blank"
        rel="noreferrer"
        style="display:inline-block; margin-bottom: 8px; padding: 10px 14px; border-radius: 8px; text-decoration: none; background: #5865F2; color: #fff; font-size: 14px;"
      >
        Join our Discord
      </a>
    </div>
    <p style="font-size: 14px; color: #71717a;">
      — The Acumen team
    </p>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const evmAddress =
      typeof body?.evmAddress === "string" ? body.evmAddress.trim() : "";
    const discord =
      typeof body?.discord === "string" ? body.discord.trim() : "";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (evmAddress) {
      const evmRegex = /^0x[a-fA-F0-9]{40}$/;
      if (!evmRegex.test(evmAddress)) {
        return NextResponse.json(
          { error: "Please enter a valid EVM address" },
          { status: 400 }
        );
      }
    }

    if (discord && discord.length > 80) {
      return NextResponse.json(
        { error: "Discord handle is too long" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Waitlist is temporarily unavailable" },
        { status: 503 }
      );
    }

    try {
      const db = await getMongoDb();
      await db.collection("waitlist").updateOne(
        { email: email.toLowerCase() },
        {
          $set: {
            email,
            evmAddress: evmAddress || null,
            discord: discord || null,
            updatedAt: new Date(),
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );
    } catch (mongoError) {
      console.error("Mongo waitlist write failed:", mongoError);
      // Don't fail the request just because persistence failed
    }

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: "You're on the Acumen waitlist",
      html: welcomeEmailHtml(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send welcome email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id,
    });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


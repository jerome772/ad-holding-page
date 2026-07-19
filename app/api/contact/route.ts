import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_TICKETS_URL = "https://api.hubapi.com/crm/v3/objects/tickets";

// Support Pipeline / "New" stage — see HubSpot ticket pipeline settings.
const TICKET_PIPELINE = "0";
const TICKET_STAGE_NEW = "1";

// Routes new tickets to Jerome's HubSpot owner ID so HubSpot's own
// "ticket assigned to me" notification fires — no separate email
// service needed.
const TICKET_OWNER_ID = "95094117";

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    website?: string; // honeypot
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, company, message, website } = body;

  // Honeypot: bots that fill every field trip this. Real users never see
  // or fill it (hidden off-screen, excluded from tab order). Fail silently
  // so bots can't tell they've been caught.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const content = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    "",
    message,
  ].join("\n");

  try {
    const hubspotRes = await fetch(HUBSPOT_TICKETS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          subject: `Website enquiry from ${name}`,
          content,
          hs_pipeline: TICKET_PIPELINE,
          hs_pipeline_stage: TICKET_STAGE_NEW,
          source_type: "FORM",
          hubspot_owner_id: TICKET_OWNER_ID,
        },
      }),
    });

    if (!hubspotRes.ok) {
      const errorBody = await hubspotRes.text();
      console.error("HubSpot ticket creation failed:", hubspotRes.status, errorBody);
      return NextResponse.json(
        { error: "Failed to save enquiry" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("HubSpot request error:", err);
    return NextResponse.json(
      { error: "Failed to save enquiry" },
      { status: 502 }
    );
  }
}

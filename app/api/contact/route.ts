import { NextResponse } from "next/server";
import { logEvent } from "../../lib/logger";
import {
  parseContactFormData,
  validateContactFormData,
  type ContactFormData,
} from "../../lib/contact";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

function getEmailJsConfig() {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!serviceId || !templateId || !publicKey || !privateKey || !toEmail) {
    return null;
  }

  return { serviceId, templateId, publicKey, privateKey, toEmail };
}

async function sendEmail(data: ContactFormData, requestId: string) {
  const config = getEmailJsConfig();

  if (!config) {
    logEvent("error", "contact.email_config_missing", { requestId });
    return {
      ok: false,
      status: 500,
      message: "Contact form is not configured yet.",
    };
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      accessToken: config.privateKey,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: config.toEmail,
        reply_to: data.email,
      },
    }),
  });

  if (!response.ok) {
    const providerMessage = await response.text();
    logEvent("error", "contact.email_send_failed", {
      requestId,
      status: response.status,
      providerMessage,
    });

    return {
      ok: false,
      status: 502,
      message: "Unable to send your message right now.",
    };
  }

  logEvent("info", "contact.email_sent", {
    requestId,
    emailDomain: data.email.split("@")[1],
  });

  return {
    ok: true,
    status: 200,
    message: "Message sent successfully!",
  };
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    const payload = parseContactFormData(await request.json());
    const validationError = validateContactFormData(payload);

    if (validationError) {
      logEvent("warn", "contact.validation_failed", {
        requestId,
        emailDomain: payload.email.split("@")[1] ?? null,
      });

      return NextResponse.json(
        { success: false, message: validationError, requestId },
        { status: 400 }
      );
    }

    const result = await sendEmail(payload, requestId);
    return NextResponse.json(
      { success: result.ok, message: result.message, requestId },
      { status: result.status }
    );
  } catch (error) {
    logEvent("error", "contact.unhandled_error", {
      requestId,
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        success: false,
        message: "Unexpected error while sending your message.",
        requestId,
      },
      { status: 500 }
    );
  }
}

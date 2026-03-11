export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactSubmissionResult = {
  success: boolean;
  message: string;
  requestId?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactFormData(input: unknown): ContactFormData {
  const record = (input ?? {}) as Record<string, unknown>;

  return {
    name: String(record.name ?? "").trim(),
    email: String(record.email ?? "").trim(),
    message: String(record.message ?? "").trim(),
  };
}

export function validateContactFormData(data: ContactFormData): string | null {
  if (data.name.length < 2) {
    return "Please enter your name.";
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return "Please enter a valid email address.";
  }

  if (data.message.length < 10) {
    return "Please provide a message with at least 10 characters.";
  }

  if (data.message.length > 2000) {
    return "Please keep your message under 2000 characters.";
  }

  return null;
}

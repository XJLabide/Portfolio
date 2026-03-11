import {
  parseContactFormData,
  validateContactFormData,
  type ContactSubmissionResult,
} from "../contact";

export async function sendEmail(form: HTMLFormElement): Promise<ContactSubmissionResult> {
  const nameField = form.elements.namedItem("name");
  const emailField = form.elements.namedItem("email");
  const messageField = form.elements.namedItem("message");

  const data = parseContactFormData({
    name: nameField instanceof HTMLInputElement ? nameField.value : "",
    email: emailField instanceof HTMLInputElement ? emailField.value : "",
    message: messageField instanceof HTMLTextAreaElement ? messageField.value : "",
  });

  const validationError = validateContactFormData(data);

  if (validationError) {
    return { success: false, message: validationError };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as ContactSubmissionResult;
    return result;
  } catch {
    return {
      success: false,
      message: "Unable to submit the form right now. Please try again later.",
    };
  }
}

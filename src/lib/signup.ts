"use server";

export type SignupState = {
  status: "idle" | "success" | "error";
  firstName?: string;
  message?: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readName(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

export async function signup(
  _prev: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const firstName = readName(formData.get("firstName"));
  const lastName = readName(formData.get("lastName"));
  const email = String(formData.get("email") ?? "").trim();

  const errors: NonNullable<SignupState["errors"]> = {};

  if (!firstName || firstName.length > 80) {
    errors.firstName = "Add your first name.";
  }
  if (!lastName || lastName.length > 80) {
    errors.lastName = "Add your last name.";
  }
  if (!email || email.length > 200 || !EMAIL.test(email)) {
    errors.email = "Enter a real email address.";
  }

  if (errors.firstName || errors.lastName || errors.email) {
    return {
      status: "error",
      errors,
      message: "Check the form and try again.",
    };
  }

  return { status: "success", firstName };
}

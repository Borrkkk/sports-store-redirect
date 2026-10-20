"use client";

import { useActionState, useEffect, type ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup, type SignupState } from "@/lib/signup";

const initialState: SignupState = { status: "idle" };

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, initialState);

  useEffect(() => {
    if (state.status === "idle") return;
    document.getElementById("signup-panel")?.scrollIntoView({
      block: "center",
      behavior: "instant",
    });
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        id="signup-panel"
        className="border border-sign bg-white px-6 py-8"
        role="status"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-sign uppercase">
          You&apos;re on the list
        </p>
        <p className="mt-3 font-serif text-3xl leading-tight text-ink">
          Thanks, {state.firstName}. We&apos;ll write twice.
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
          First with the Aurora address. Again when the website opens — custom
          jerseys, the vintage shop, and the kids&apos; rack.
        </p>
      </div>
    );
  }

  return (
    <form id="signup-panel" action={action} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="firstName"
          name="firstName"
          label="First name"
          autoComplete="given-name"
          error={state.errors?.firstName}
        />
        <Field
          id="lastName"
          name="lastName"
          label="Last name"
          autoComplete="family-name"
          error={state.errors?.lastName}
        />
      </div>
      <Field
        id="email"
        name="email"
        type="email"
        label="Email address"
        autoComplete="email"
        inputMode="email"
        error={state.errors?.email}
      />
      {state.status === "error" && state.message ? (
        <p className="text-sm text-maple" role="alert">
          {state.message}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={pending}
        className="h-12 rounded-none px-6 text-sm font-semibold tracking-[0.16em] uppercase"
      >
        {pending ? "Signing up…" : "Sign up"}
      </Button>
      <p className="text-sm leading-relaxed text-ink/60">
        Two notes, when we have them: the new location, and the website launch.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  ...props
}: ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-11 rounded-none bg-white px-3 text-base md:text-base"
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-sm text-maple">
          {error}
        </p>
      ) : null}
    </div>
  );
}

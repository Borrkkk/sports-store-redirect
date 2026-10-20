import { cn } from "cn";

export function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("size-3.5", className)}
    >
      <path
        fill="currentColor"
        d="M24 3.2c.4 3 1.5 4.9 3 6.2 2.1-1.9 3.4-2.1 4.8-1.3-.6 2.1-.2 3.6 1.1 5.3 2.8-.2 4.3.5 5.6 1.8-2.3 1.5-3.2 2.8-3.4 4.7 2.3.9 3.2 2.2 3.4 4-2.5.2-4-.3-5.5-1.5.2 2.2-.3 3.8-1.5 5.5-1.5-2-2.5-2.8-4.2-3 .2 2.8-.3 4.5-1.3 7h-2.2c-.9-2.5-1.5-4.2-1.3-7-1.7.2-2.7 1-4.2 3-1.2-1.7-1.7-3.3-1.5-5.5-1.5 1.2-3 1.7-5.5 1.5.2-1.8 1.1-3.1 3.4-4-.2-1.9-1.1-3.2-3.4-4.7 1.3-1.3 2.8-2 5.6-1.8 1.3-1.7 1.7-3.2 1.1-5.3 1.4-.8 2.7-.6 4.8 1.3 1.5-1.3 2.6-3.2 3-6.2z"
      />
      <path fill="currentColor" d="M22.1 37.2h3.8V45h-3.8z" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-sign px-2.5 py-1.5 text-white",
        className,
      )}
    >
      <span className="text-[11px] font-semibold tracking-[0.16em] sm:text-[13px] sm:tracking-[0.2em]">
        THE SPORTS STORE
      </span>
      <MapleLeaf className="size-3 text-maple sm:size-3.5" />
    </span>
  );
}

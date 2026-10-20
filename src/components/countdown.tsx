"use client";

import { useSyncExternalStore } from "react";

const LAST_DAY = "2026-10-31";
const FALLBACK = "Last day is Saturday, October 31";

function mallLabel(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;
  const today = `${year}-${month}-${day}`;

  if (today > LAST_DAY) {
    return "The Newmarket shop has closed. Aurora is next.";
  }
  if (today === LAST_DAY) {
    return "Today is the last day in Newmarket.";
  }

  const start = Date.parse(`${today}T00:00:00Z`);
  const end = Date.parse(`${LAST_DAY}T00:00:00Z`);
  const days = Math.round((end - start) / 86_400_000);

  if (days === 1) return "Tomorrow is the last day in Newmarket.";
  return `${days} days until the last day in Newmarket.`;
}

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}

function getSnapshot() {
  return mallLabel(new Date());
}

function getServerSnapshot() {
  return FALLBACK;
}

export function Countdown() {
  const label = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <p className="text-sm font-medium text-sign">{label}</p>;
}

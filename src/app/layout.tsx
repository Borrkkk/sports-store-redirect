import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Sports Store is moving to Aurora",
  description:
    "After 32 years in the Upper Canada Mall, The Sports Store's last day in Newmarket is Saturday, October 31. Operations are moving to Aurora. Sign up for the new address and the website: custom licensed jerseys, a vintage buy-and-sell shop, and kids' custom jerseys.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

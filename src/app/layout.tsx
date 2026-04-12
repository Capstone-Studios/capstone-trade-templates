import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capstone Trade Templates — Premium Websites for Every Trade",
  description: "8 premium, trade-specific website templates. Roofing, plumbing, electrical, HVAC, landscaping, painting, general contractor, handyman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-[var(--font-body)]">{children}</body>
    </html>
  );
}

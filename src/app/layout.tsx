import type { Metadata } from "next";
import { Inter, Playfair_Display, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${barlow.variable} h-full antialiased`}>
      <body className="min-h-full font-[var(--font-body)]">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Engine | Accountability & Visibility in Workforce Health",
  description:
    "The Engine helps organizations create accountability, visibility, and follow-through across workforce health.",
  metadataBase: new URL("https://hdhp-theengine.com"),
  openGraph: {
    title: "The Engine | Accountability & Visibility in Workforce Health",
    description:
      "The Engine helps organizations create accountability, visibility, and follow-through across workforce health.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-brand-dark text-brand-offwhite font-sans">
        {children}
      </body>
    </html>
  );
}

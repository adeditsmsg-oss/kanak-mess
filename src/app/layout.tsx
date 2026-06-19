import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "কনক মেস কাম পেয়িং গেস্ট | Kanak Mess Cum Paying Guest in Saratpally, Midnapore",
  description: "Kanak Mess Cum Paying Guest (কনক মেস কাম পেয়িং গেস্ট) provides comfortable marble floor rooms and a consistent daily mess in Saratpally, Midnapore. Admission open for 2026 session.",
  keywords: ["Kanak Mess", "Paying Guest Midnapore", "Saratpally hostel", "Student Mess Midnapore", "Kanak PG"],
  authors: [{ name: "Kanak Mess Management" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn-IN" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

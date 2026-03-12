import type { Metadata } from "next";
import "./globals.css";
import AppShell from "./components/custom/app-shell";

export const metadata: Metadata = {
  title: "Xander Jacob Labide",
  description: "Portfolio of Xander Jacob Labide, a creative developer and designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

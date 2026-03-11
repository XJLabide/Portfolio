import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/custom/navbar";

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
        <Navbar />
        <div className="min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </body>
    </html>
  );
}

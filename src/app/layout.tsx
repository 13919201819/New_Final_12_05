import type { Metadata } from "next";
import "./globals.css"; // ✅ Corrected import path
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "CLUMOSS - AI & Innovation Hub",
  description: "Transforming Industries with AI-powered SaaS Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white bg-black">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
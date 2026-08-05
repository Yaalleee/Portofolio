import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio | Nama Kamu",
  description: "Portofolio modern dengan Next.js dan Tailwind CSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <Navbar />
          <main className="flex-1 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
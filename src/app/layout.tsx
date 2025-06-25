import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollContext from "@/contexts/ScrollContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iceberg - AI-powered ITSM | Iceberg",
  description: "Uncomplicated, AI-powered ITSM. One platform for IT and business teams to deliver better, faster employee service.",
  keywords: "ITSM, IT service management, AI, help desk, IT support, employee service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollContext>
          {children}
        </ScrollContext>
      </body>
    </html>
  );
}

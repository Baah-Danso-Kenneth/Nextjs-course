import type { Metadata } from "next";
import localFont from "next/font/local";

import './globals.css';




export const metadata: Metadata = {
  title: "Various clones",
  description: "Upskilling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
    
        {children}
      </body>
    </html>
  );
}

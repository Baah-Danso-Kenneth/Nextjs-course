import type { Metadata } from "next";
import localFont from "next/font/local";




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
      <body
      >
        {children}
      </body>
    </html>
  );
}

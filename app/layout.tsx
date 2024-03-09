import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css"

export const metadata: Metadata = {
  title: "Responsive Web Test",
  description: "Responsive Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netrois Portfolio | Backend Developer / Engineer",
  description:
    "Netrois portfolio focused on self-hosted systems, backend architecture and infrastructure.",
  icons: {
    icon: "/avatar.png",
    apple: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

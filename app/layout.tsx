import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        // ライトモード時のアイコン
        media: "(prefers-color-scheme: light)",
        url: "/next.svg",
        href: "/next.svg",
      },
      {
        // ダークモード時のアイコン
        media: "(prefers-color-scheme: dark)",
        url: "/vercel.svg",
        href: "/vercel.svg",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

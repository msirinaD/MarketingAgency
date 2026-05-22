import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3ANT. | Системный маркетинг для бизнеса",
  description:
    "Digital-система роста бизнеса через сайт, рекламу, SEO, аналитику, CRM и автоматизацию."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

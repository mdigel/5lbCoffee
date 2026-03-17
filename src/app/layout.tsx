import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5LB Coffee — Wholesale Specialty Coffee",
  description:
    "5 lbs of specialty coffee for $99. Wholesale pricing. Roasted to Order. Roaster of the Year winner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

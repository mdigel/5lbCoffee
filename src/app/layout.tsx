import type { Metadata } from "next";
import { PostHogProvider } from "@/components/PostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "5LB Coffee — Wholesale Specialty Coffee",
  description:
    "5 lbs of specialty coffee for $99. Wholesale pricing. Roasted to Order. Roaster of the Year winner.",
  metadataBase: new URL("https://get5lbcoffee.com"),
  openGraph: {
    title: "Get5lbCoffee.com — Wholesale Specialty Coffee",
    description:
      "5 lbs of specialty coffee for $99. Roasted to order. Shipped within 24 hours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get5lbCoffee.com",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get5lbCoffee.com — Wholesale Specialty Coffee",
    description:
      "5 lbs of specialty coffee for $99. Roasted to order. Shipped within 24 hours.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/coffeebag_mini.png",
    apple: "/coffeebag_mini.png",
  },
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
      <body className="antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rockandpour.co.uk"),
  title: "Rock & Pour | Premium Mobile Cocktail Bar for Weddings, Parties and Events",
  description:
    "Rock & Pour delivers premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rock & Pour | Premium Mobile Cocktail Bar",
    description:
      "Premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
    url: "https://www.rockandpour.co.uk",
    siteName: "Rock & Pour",
    type: "website",
    images: [
      {
        url: "/POSTER.png",
        width: 520,
        height: 737,
        alt: "Rock & Pour — Live Music & All-Inclusive Drinks at The Bowdon Rooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock & Pour | Premium Mobile Cocktail Bar",
    description:
      "Premium mobile cocktail bar experiences for weddings, private parties and corporate events across the UK.",
    images: ["/POSTER.png"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Music For Filling Gas Stations",
  description: "I DO NOT LIKE the Music at my LOcal GASSTATION, It does NOT play the hits I like, I like old stuff, but they only PLAy NEW STUFF NO NEW STUFF, REST IN PEACE BRIAN WILLIAMS, HE MADE MY FAVOTIE GASSTAION AALBUM PEET SOUNds",
  openGraph: {
    title: "Music For Filling Gas Stations",
    description: "RIP BRIAN WILLIAMSON",
    url: "https://www.musicforgasstations.com/",
    siteName: "MFGS",
    images: [
      {
        url: "https://your-domain.com/boot.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Music For Filling Gas Stations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music For Filling Gas Stations",
    description: "NO MORE BAD GAS MUSIC",
    images: ["https://your-domain.com/og-image.png"],
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Comic+Relief&display=swap"
        />
      </head>
      <body
        className='font-comic'
      >
        {children}
      </body>
    </html>
  );
}

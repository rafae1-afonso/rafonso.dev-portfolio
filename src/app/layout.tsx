import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import PixelSnow from "@/components/PixelSnow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: '400'
})

const imbPlexSans = IBM_Plex_Sans({
  weight: '400'
})

export const metadata: Metadata = {
  title: "rafonso.dev | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.className} ${imbPlexSans.className} antialiased dark`}
      >
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={300}
          speed={0.5}
          density={0.1}
          direction={180}
          brightness={3}
        />
        {children}
      </body>
    </html>
  );
}

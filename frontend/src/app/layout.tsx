import type { Metadata } from "next";
import { Libertinus_Serif, Red_Hat_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-red-hat-display",
});

const libertinusSerif = Libertinus_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libertinus-serif",
});

export const metadata: Metadata = {
  title: "Gareth McClellan",
  description: "Gareth McClellan's personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${libertinusSerif.variable}`}>
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}

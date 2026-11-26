import type { Metadata } from "next";
import { Cal_Sans, Red_Hat_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-red-hat-display",
});

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cal-sans",
});

export const metadata: Metadata = {
  title: "Gareth McClellan",
  description: "Gareth McClellan's personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${calSans.variable}`}>
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

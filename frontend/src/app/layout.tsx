import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gareth McClellan",
  description: "Gareth McClellan's personal website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

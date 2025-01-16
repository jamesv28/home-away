import type { Metadata } from "next";
import "./globals.css";
import { Rethink_Sans } from "next/font/google";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Home Away",
  description: "Feel at home, away from home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rethink.className}>
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}

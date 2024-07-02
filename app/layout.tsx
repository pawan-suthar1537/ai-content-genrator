import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const Inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "AI Content Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={Inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

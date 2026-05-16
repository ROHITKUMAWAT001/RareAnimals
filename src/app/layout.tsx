import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WildPedia - Discover the Wonder of Wildlife",
  description: "Journey through the animal kingdom — from the depths of the ocean to the peaks of mountains. Learn about incredible creatures and how we can protect them.",
  keywords: ["wildlife", "animals", "conservation", "nature", "biodiversity", "endangered species"],
  authors: [{ name: "WildPedia" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "WildPedia - Discover the Wonder of Wildlife",
    description: "Explore 15+ amazing species and learn about wildlife conservation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WildPedia - Discover the Wonder of Wildlife",
    description: "Explore 15+ amazing species and learn about wildlife conservation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Niramit, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/providers/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"]
});

const niramit = Niramit({
  variable: "--font-niramit",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Portfólio - Gabriel Novais",
  description: "My portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${niramit.variable} bg-linear-to-b from-background to-(--background-alt) scroll-smooth`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import type { Metadata } from "next";
import { Nunito, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--serifDisplay",
});

const dreamAvenue = localFont({
  src: "../../public/fonts/DreamAvenue.ttf",
  display: "swap",
  variable: "--dream-avenue",
});

export const metadata: Metadata = {
  title: "RLMFlorist",
  description: "Your premier local florist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-w-0 scroll-smooth font-sans antialiased",
          nunito.variable,
          dreamAvenue.variable,
          dmSerif.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

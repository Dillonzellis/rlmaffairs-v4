import localFont from "next/font/local";
import type { Metadata } from "next";
import { Nunito, DM_Serif_Display, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header/Header";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--serifDisplay",
});

const dreamAvenue = localFont({
  src: "../../../public/fonts/DreamAvenue.ttf",
  display: "swap",
  variable: "--dream-avenue",
});

export const metadata: Metadata = {
  title: {
    default: "RLM Affairs",
    template: "%s | RLM Affairs",
  },
  description: "Your premier wedding venue and event space.",
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
          inter.variable,
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

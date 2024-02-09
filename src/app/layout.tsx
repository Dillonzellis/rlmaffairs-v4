import localFont from "next/font/local";
import type { Metadata } from "next";
import { Nunito, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer/Footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
          "min-w-0 font-sans antialiased",
          nunito.variable,
          dreamAvenue.variable,
          dmSerif.variable,
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

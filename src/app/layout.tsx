import localFont from "next/font/local";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });

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
          "font-sans antialiased",
          nunito.variable,
          dreamAvenue.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}

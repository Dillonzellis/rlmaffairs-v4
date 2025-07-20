import Link from "next/link";
import { headers } from "next/headers";
import { PageHero } from "@/components/common/PageHero";
import { NotFoundSection } from "@/components/sections/NotFoundSection/NotFoundSection";

export default function NotFound() {
  return (
    <main className="min-h-dvh">
      <PageHero videoSrc="/RLM-Website.webm" link="#about" />
      <NotFoundSection />
    </main>
  );
}

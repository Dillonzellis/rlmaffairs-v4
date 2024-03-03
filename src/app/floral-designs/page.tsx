import { PageHero } from "@/components/common/PageHero";
import { HomeHashLinks } from "@/data/navLinks";

export default function FloralsPage() {
  return (
    <main>
      <PageHero
        imgSrc="/hero-placeholder.jpg"
        imgAlt=""
        hashLinks={HomeHashLinks}
      />
    </main>
  );
}

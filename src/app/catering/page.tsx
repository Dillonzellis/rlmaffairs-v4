import { PageHero } from "@/components/common/PageHero";
import { HomeHashLinks } from "@/data/navLinks";

export default function CateringPage() {
  return (
    <PageHero
      imgSrc="/hero-placeholder.jpg"
      imgAlt=""
      hashLinks={HomeHashLinks}
    />
  );
}

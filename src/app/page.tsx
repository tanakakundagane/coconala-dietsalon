import { HeroSection } from "@/components/home/hero-section";
import { ConceptSection } from "@/components/home/concept-section";
import { TrialSection } from "@/components/home/trial-section";
import { MenuSection } from "@/components/home/menu-section";
import { SalonInfoSection } from "@/components/home/salon-info-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ConceptSection />
      <TrialSection />
      <MenuSection />
      <SalonInfoSection />
    </main>
  );
}

import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import GreetingSection from "@/components/GreetingSection";
import InfoSection from "@/components/InfoSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import AccountSection from "@/components/AccountSection";
import EndingSection from "@/components/EndingSection";

export default function Home() {
  return (
    <main className="max-w-md mx-auto">
      <CoverSection />
      <GreetingSection />
      <InfoSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <AccountSection />
      <EndingSection />
    </main>
  );
}

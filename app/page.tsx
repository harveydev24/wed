import HeroSection from "@/components/HeroSection";
import GreetingSection from "@/components/GreetingSection";
import InfoSection from "@/components/InfoSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import AccountSection from "@/components/AccountSection";
export default function Home() {
  return (
    <main className="max-w-md mx-auto">
      <HeroSection />
      <GreetingSection />
      <InfoSection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
    </main>
  );
}

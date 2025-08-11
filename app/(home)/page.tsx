import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center text-center border-x border-dashed border-fd-border/60">
        <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed border-fd-border/60 top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}

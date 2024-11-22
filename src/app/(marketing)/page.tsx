import Cta from "@/components/layout/cta";
import Features from "@/components/layout/features";
import Hero from "@/components/layout/hero";
import Pricing from "@/components/layout/pricing";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-10">
      <Hero />
      <Features />
      <Pricing/>
      <Cta />
    </main>
  );
}

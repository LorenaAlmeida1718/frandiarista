import Differentiators from "@/components/sections/differentiators";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Differentiators />
      <WhatsAppButton />
    </main>
  );
}

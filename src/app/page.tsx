import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhatsAppButton from "@/components/whatsapp-button";
import Frustration from "@/components/sections/frustration";
import About from "@/components/sections/about";
import Trust from "@/components/sections/trust";
import FinalCta from "@/components/sections/final-cta";
import Introduction from "@/components/sections/introduction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Frustration />
      <About />
      <Services />
      <Trust />
      <FinalCta />
      <WhatsAppButton />
    </main>
  );
}

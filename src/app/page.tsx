import Contact from "@/pages/Contact";
import Features from "@/pages/Features";
import Hero from "@/pages/Hero";
import VisualTour from "@/pages/VisualTour";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Features />
        <VisualTour />
        <Contact />
      </main>
    </div>
  );
}

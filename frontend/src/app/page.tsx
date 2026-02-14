import { Hero } from "@/components/Hero";
import { Architecture } from "@/components/Architecture";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { TechStack } from "@/components/TechStack";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Timeline />
      <Architecture />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}

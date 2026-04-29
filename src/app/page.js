import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Hero />
        <Stats />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Collaborations from "@/components/Collaborations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c]">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Collaborations />
      <SectionDivider />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

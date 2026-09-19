import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import EmailAside from "@/components/EmailAside";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <EmailAside />
      <main className="mx-auto w-full max-w-screen-xl px-6 md:px-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoGallery from "@/components/sections/VideoGallery";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutUs";
import ServicePreview from "@/components/sections/ServicePreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicePreview />
        <ServicesSection />
        <VideoGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

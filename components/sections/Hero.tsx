"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log("Video loaded successfully");
      setIsVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      console.error("Video loading error:", target.error);
      setVideoError(true);
      setIsVideoLoaded(false);
    };

    // Add event listeners
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    // Set video attributes
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Handle video playback
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("Video play failed:", error);
        setVideoError(true);
      }
    };

    playVideo();

    // Cleanup
    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Enhanced Overlays */}
      <div className="absolute inset-0 w-full h-full">
        {/* Loading/Error State with Fallback Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 transition-opacity duration-1000 z-[5] ${
            isVideoLoaded && !videoError ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Optional: Add a fallback image here */}
          {videoError && (
            <Image
              src="/images/fallback-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          )}
        </div>

        {/* Video with Multiple Sources */}
        <video
          ref={videoRef}
          playsInline
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/videos/intro.webm" type="video/webm" />
          <source
            src="/videos/intro.mp4"
            type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"
          />
          {/* You can add more source formats if needed */}
        </video>

        {/* Enhanced Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-20" />
        <div className="absolute inset-0 bg-black/10 bg-[linear-gradient(45deg,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)] z-30" />
      </div>

      {/* Main Content */}
      <Container className="relative z-40 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-block">
              <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-gold/20 to-yellow-300/20 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute inset-0 bg-gray-100 rounded-full transform -translate-y-1" />
                <Image
                  src="/images/logo.png"
                  alt="RM Car Studio"
                  width={96}
                  height={96}
                  className="relative z-10 object-contain p-4"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Main Title with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1
              className="font-trajan text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              PROTECCIÓN Y
              <motion.span
                className="block mt-2 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                BELLEZA
              </motion.span>
              <motion.span
                className="block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                PARA SU VEHÍCULO
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 mt-8 tracking-wide"
          >
            Detallado de alto nivel y recubrimiento cerámico profesional
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary-gold text-black hover:bg-primary-gold/90 px-8 py-4 transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
            >
              Cotizar Ahora
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("servicios")}
            >
              Nuestros Servicios
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() => scrollToSection("servicios")}
        style={{ cursor: "pointer" }}
      >
        <ChevronDown className="w-8 h-8 text-primary-gold" />
      </motion.div>
    </section>
  );
}

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

    // Reset states when component mounts
    setIsVideoLoaded(false);
    setVideoError(false);

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      setVideoError(false);

      // Attempt to play video after it's loaded
      video.play().catch((error) => {
        console.error("Video play failed:", error);
        setVideoError(true);
      });
    };

    const handleError = (e: Event) => {
      console.error(
        "Video loading error:",
        (e.target as HTMLVideoElement).error
      );
      setVideoError(true);
      setIsVideoLoaded(false);
    };

    // Configure video element
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    // Set video sources programmatically
    const sources = [
      { src: "/videos/intro.webm", type: "video/webm" },
      {
        src: "/videos/intro.mp4",
        type: "video/mp4; codecs=avc1.42E01E,mp4a.40.2",
      },
    ];

    // Remove any existing sources
    while (video.firstChild) {
      video.removeChild(video.firstChild);
    }

    // Add new source elements
    sources.forEach(({ src, type }) => {
      const source = document.createElement("source");
      source.src = src;
      source.type = type;
      video.appendChild(source);
    });

    // Add event listeners
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    // Load the video
    video.load();

    return () => {
      // Cleanup
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      if (!video.paused) {
        video.pause();
      }
      // Clear sources
      while (video.firstChild) {
        video.removeChild(video.firstChild);
      }
      // Reset video element
      video.load();
    };
  }, []); // Empty dependency array since we want this to run only once

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
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 transition-opacity duration-1000 z-[5] ${
            isVideoLoaded && !videoError ? "opacity-0" : "opacity-100"
          }`}
        >
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

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          onContextMenu={(e) => e.preventDefault()}
        />

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

          {/* New container for buttons and scroll indicator */}
          <div className="flex flex-col gap-12">
            {" "}
            {/* Added gap between buttons and scroll indicator */}
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
                onClick={() => scrollToSection("service-preview")}
              >
                Nuestros Servicios
              </Button>
            </motion.div>
            {/* Scroll Indicator */}
            <motion.div
              className="flex justify-center" // Changed from absolute positioning
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
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BrandIcon } from "./BrandIcon";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useNavbarContext } from "@/lib/navbar-context";

export const WhatsAppBubble = () => {
  const { isMenuOpen } = useNavbarContext();

  if (isMenuOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <BrandIcon brand="whatsapp" className="w-8 h-8 text-white" />
      </a>
    </motion.div>
  );
};

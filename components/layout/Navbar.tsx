"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS, CALENDLY_LINK } from "@/lib/constants";
import { useNavbarContext } from "@/lib/navbar-context";
import { trackFbqEvent } from "@/lib/utils";

export default function Navbar() {
  const { isMenuOpen: isOpen, setIsMenuOpen: setIsOpen } = useNavbarContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="relative z-50 group">
              <div className="flex items-center">
                <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <Image
                    src="/images/logo.png"
                    alt="RM Car Studio"
                    width={56}
                    height={56}
                    className="relative z-10 object-contain p-2"
                    priority
                  />
                </div>
                <div className="ml-3">
                  <span className="font-trajan text-white text-xl tracking-wider">
                    RM Car Studio
                  </span>
                  <span className="block text-xs text-primary-gold tracking-widest uppercase">
                    Professional Detailers
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-trajan text-sm text-white hover:text-primary-gold transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="secondary"
                  className="hover:text-primary-gold transition-all duration-300"
                  onClick={() => {
                    trackFbqEvent("Schedule");
                    window.open(CALENDLY_LINK, "_blank");
                  }}
                >
                  Agendar
                </Button>
                <Button
                  size="sm"
                  className="bg-primary-gold text-black hover:bg-primary-gold/90 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    trackFbqEvent("Contact"); // <-- Track Contact (WhatsApp)
                    window.open(SOCIAL_LINKS.whatsapp, "_blank");
                  }}
                >
                  Cotizar
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 text-white hover:text-primary-gold transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-full min-h-screen bg-black z-40 md:hidden"
            >
              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full pt-28">
                <div className="flex-1 px-6 overflow-y-auto">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="py-4 border-b border-gray-800"
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block text-xl text-white hover:text-primary-gold transition-colors font-trajan text-center"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-8 space-y-4 bg-black/90">
                  <Button
                    className="w-full bg-white/10 text-white hover:bg-white/20 py-4 text-lg"
                    onClick={() => {
                      trackFbqEvent("Schedule");
                      window.open(CALENDLY_LINK, "_blank");
                      handleLinkClick();
                    }}
                  >
                    Agendar
                  </Button>
                  <Button
                    className="w-full bg-primary-gold text-black hover:bg-primary-gold/90 py-4 text-lg"
                    onClick={() => {
                      trackFbqEvent("Contact");
                      window.open(SOCIAL_LINKS.whatsapp, "_blank");
                      handleLinkClick();
                    }}
                  >
                    Cotizar
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

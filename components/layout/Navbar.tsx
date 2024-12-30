"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo Section */}
          <Link href="/" className="relative z-10 group">
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
                <span className="block text-xs text-[#C4A763] tracking-widest uppercase">
                  Professional Detailers
                </span>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
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
            <Button
              size="sm"
              className="bg-primary-gold text-black hover:bg-primary-gold/90 transition-all duration-300 transform hover:scale-105"
            >
              Cotizar
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 text-white hover:text-primary-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-lg pt-24 pb-8 px-4"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary-gold transition-colors py-2 text-center font-trajan block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
              >
                <Button className="w-full mt-4 bg-primary-gold text-black hover:bg-primary-gold/90">
                  Cotizar
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

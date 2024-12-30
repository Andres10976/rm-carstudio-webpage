"use client";

import { MapPin, Phone, Mail, ArrowUpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BrandIcon } from "../ui/BrandIcon";
import { motion } from "framer-motion";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  NAV_ITEMS,
} from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-black/95 text-white pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section with Logo and Scroll to Top */}
        <div className="flex justify-between items-start mb-16">
          <Link href="/" className="group">
            <div className="flex items-center">
              <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-gray-100 rounded-full" />
                <Image
                  src="/images/logo.png"
                  alt="RM Car Studio"
                  width={56}
                  height={56}
                  className="relative z-10 object-contain p-2"
                />
              </div>
              <div className="ml-3">
                <span className="font-trajan text-xl tracking-wider">
                  RM Car Studio
                </span>
                <span className="block text-xs text-primary-gold tracking-widest uppercase">
                  Professional Detailers
                </span>
              </div>
            </div>
          </Link>

          <button
            onClick={scrollToTop}
            className="p-2 hover:text-primary-gold transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpCircle className="w-8 h-8" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-trajan text-2xl mb-6">Sobre Nosotros</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Expertos en detallado automotriz y protección de pintura,
              ofreciendo servicios premium con certificaciones internacionales.
            </p>
            <div className="flex space-x-6">
              {Object.entries(SOCIAL_LINKS)
                .slice(0, 3)
                .map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    className="transform hover:scale-110 hover:text-primary-gold transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BrandIcon brand={platform as any} className="w-6 h-6" />
                  </Link>
                ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-trajan text-2xl mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-gold transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-gold rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-trajan text-2xl mb-6">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-primary-gold" />
                </div>
                <Link
                  href={SOCIAL_LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-gold transition-colors flex-1"
                >
                  {ADDRESS}
                </Link>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-primary-gold" />
                <Link
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-primary-gold transition-colors"
                >
                  {PHONE_NUMBER}
                </Link>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-primary-gold" />
                <Link
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-primary-gold transition-colors"
                >
                  {EMAIL}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

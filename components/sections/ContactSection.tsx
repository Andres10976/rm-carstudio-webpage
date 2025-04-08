"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Calendar, // Added Calendar icon
} from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { BrandIcon } from "../ui/BrandIcon";
import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  CALENDLY_LINK, // Import CALENDLY_LINK
} from "@/lib/constants";
import { trackFbqEvent } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({
    type: "idle",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error sending message");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus({
          type: "success",
          message:
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        });
        trackFbqEvent("Lead");

        setTimeout(() => {
          setStatus({ type: "idle" });
        }, 5000);
      }
    } catch (error: unknown) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Error al enviar el mensaje. Por favor intente nuevamente.",
      });

      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    }
  };

  const openCalendlyPopup = () => {
    if (
      window.Calendly &&
      typeof window.Calendly.initPopupWidget === "function"
    ) {
      trackFbqEvent("Schedule");
      const calendlyUrlWithParams = `${CALENDLY_LINK}?background_color=0a0a0a&text_color=ffffff&primary_color=f7d046&hide_event_type_details=1&hide_gdpr_banner=1`;
      window.Calendly.initPopupWidget({ url: calendlyUrlWithParams });
    } else {
      console.error(
        "Calendly script not loaded yet or initPopupWidget is missing."
      );
      alert(
        "El sistema de agendamiento no está listo. Por favor, intente de nuevo en unos segundos o contáctenos directamente."
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-trajan text-3xl text-white mb-4">CONTÁCTENOS</h2>
          <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
            Estamos para Servirle
          </h3>
          {/* --- ADDED: Description for scheduling --- */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Envíenos un mensaje usando el formulario a continuación o agende su
            cita directamente.
          </p>
          {/* --- END ADDED --- */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 p-8 rounded-lg h-full flex flex-col">
              <h4 className="font-trajan text-2xl text-white mb-6 flex-shrink-0">
                Envíenos un Mensaje
              </h4>
              {/* Status Message Area */}
              {status.type !== "idle" && status.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center flex-shrink-0 ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-500"
                      : status.type === "error"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-primary-gold/10 text-primary-gold" // Loading state (optional)
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
                  )}
                  {status.type === "error" && (
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  )}
                  {status.type === "loading" && (
                    <Loader2 className="h-5 w-5 mr-2 animate-spin flex-shrink-0" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex flex-col flex-grow"
              >
                <div className="flex-grow space-y-6">
                  {/* Form Fields */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-500"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-500"
                      placeholder="ejemplo@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Teléfono (Opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-500"
                      placeholder="(+506) 0000-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-300 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-500"
                      placeholder="¿En qué podemos ayudarle?"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary-gold text-black hover:bg-primary-gold/90 group mt-auto flex-shrink-0"
                  disabled={status.type === "loading"}
                >
                  <span className="flex items-center justify-center">
                    {status.type === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Schedule Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 p-8 rounded-lg h-full flex flex-col">
              <h4 className="font-trajan text-2xl text-white mb-8 flex-shrink-0">
                Información y Citas
              </h4>
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => {
                    trackFbqEvent("Contact");
                    window.open(`tel:${PHONE_NUMBER.replace(/\s/g, "")}`);
                  }}
                >
                  <div className="bg-primary-gold/10 p-4 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <p className="text-white group-hover:text-primary-gold transition-colors">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </motion.div>
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => {
                    trackFbqEvent("Contact");
                    window.open(`mailto:${EMAIL}`);
                  }}
                >
                  <div className="bg-primary-gold/10 p-4 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-primary-gold transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </motion.div>
                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group cursor-pointer"
                  onClick={() => window.open(SOCIAL_LINKS.maps, "_blank")}
                >
                  <div className="bg-primary-gold/10 p-4 rounded-lg group-hover:bg-primary-gold/20 transition-colors mt-1 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Dirección</p>
                    <p className="text-white group-hover:text-primary-gold transition-colors">
                      {ADDRESS}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* --- ADDED: Schedule Button --- */}
              <div className="mt-8 mb-8">
                {" "}
                {/* Added margin top and bottom */}
                <Button
                  onClick={openCalendlyPopup}
                  className="w-full bg-white/10 text-white hover:bg-white/20 group flex items-center justify-center"
                  size="lg" // Make button larger
                >
                  <Calendar className="mr-2 h-5 w-5" /> Agendar una Cita
                </Button>
              </div>
              {/* --- END ADDED --- */}

              {/* Social Media Links */}
              <div className="mt-auto pt-8 border-t border-gray-800/50 flex-shrink-0">
                <h5 className="font-trajan text-lg text-white mb-4 text-center">
                  Síganos en Redes
                </h5>
                <div className="flex justify-center space-x-6">
                  {(["facebook", "instagram", "youtube"] as const).map(
                    (platform) => (
                      <Link
                        key={platform}
                        href={SOCIAL_LINKS[platform]}
                        className="transform hover:scale-110 hover:text-primary-gold transition-all duration-300 text-gray-400"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visita nuestro ${platform}`}
                      >
                        <BrandIcon brand={platform} className="w-7 h-7" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

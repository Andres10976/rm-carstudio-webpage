"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  CALENDLY_LINK,
  SOCIAL_LINKS,
} from "@/lib/constants";

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

      // Only clear form and show success if we got a success response
      if (data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus({
          type: "success",
          message:
            "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
        });

        // Reset status after 5 seconds
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

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 p-8 rounded-lg">
              <h4 className="font-trajan text-2xl text-white mb-6">
                Envíenos un Mensaje
              </h4>
              {status.type !== "idle" && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-500"
                      : status.type === "error"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-primary-gold/10 text-primary-gold"
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                  )}
                  {status.type === "error" && (
                    <AlertCircle className="h-5 w-5 mr-2" />
                  )}
                  {status.type === "loading" && (
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Teléfono
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
                <Button
                  type="submit"
                  className="w-full bg-primary-gold text-black hover:bg-primary-gold/90 group"
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

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 p-8 rounded-lg">
              <h4 className="font-trajan text-2xl text-white mb-8">
                Información de Contacto
              </h4>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() =>
                    window.open(`tel:${PHONE_NUMBER.replace(/\s/g, "")}`)
                  }
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

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => window.open(`mailto:${EMAIL}`)}
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

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={() => window.open(SOCIAL_LINKS.maps, "_blank")}
                >
                  <div className="bg-primary-gold/10 p-4 rounded-lg group-hover:bg-primary-gold/20 transition-colors">
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
            </div>

            {/* Calendly Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-800 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary-gold" />
                <h4 className="font-trajan text-2xl text-white">
                  Agende una Cita
                </h4>
              </div>
              <p className="text-gray-400 mb-6">
                Reserve su cita para servicios de detallado utilizando nuestro
                calendario en línea.
              </p>
              <Button
                onClick={() => window.open(CALENDLY_LINK, "_blank")}
                className="w-full bg-black/50 text-white border-2 border-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center justify-center">
                  Agendar Ahora
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
export default ContactSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Car, SprayCan, Square } from "lucide-react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const ServicesSection = () => {
  const services = [
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: "RECUBRIMIENTO CERÁMICO",
      description: "Protección premium con diferentes durabilidades",
      features: [
        "Categorías: 3, 5 y 9 años de durabilidad",
        "Protección UV avanzada",
        "Brillo superior y duradero",
        "Mantenimiento especializado disponible",
      ],
      image: "/images/gtechniq-certified.png",
      imageWidth: 140,
      imageHeight: 70,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "PAINT PROTECTION FILM",
      description: "Protección física de última generación",
      features: [
        "Estilos: Transparente, Colores y Patrones",
        "Dynoflex para parabrisas y otras áreas",
        "10 años de garantía",
        "Instalación profesional certificada",
      ],
      image: "/images/Stek_Certified.png",
      imageWidth: 140,
      imageHeight: 70,
    },
    {
      icon: <Square className="w-8 h-8" />,
      title: "POLARIZADO DE VIDRIOS",
      description: "Tecnología avanzada para máximo confort",
      features: [
        "Nanocarbón: Control superior de temperatura",
        "Grafeno: Máxima eficiencia térmica",
        "Visibilidad mejorada",
        "Protección UV completa",
      ],
      image: "/images/Stek_Dynoshield_whitebg.png",
      imageWidth: 140,
      imageHeight: 70,
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "LAVADO PREMIUM",
      description: "Servicio detallado con estándares internacionales",
      features: [
        "Proceso certificado anti-microrayas",
        "Productos y herramientas premium",
        "Aire filtrado especializado",
        "Extras: Lavado de chasis y motor",
      ],
      image: "/images/rupes-logo.png",
      imageWidth: 140,
      imageHeight: 70,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-trajan text-3xl mb-4 text-white">
            NUESTROS SERVICIOS
          </h2>
          <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
            Soluciones Profesionales de Protección
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Ofrecemos servicios integrales de protección y embellecimiento
            automotriz utilizando productos y técnicas de última generación.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 p-6 rounded-lg hover:border-primary-gold/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-gold/10 rounded-full text-primary-gold">
                  {service.icon}
                </div>
                <h4 className="font-trajan text-xl text-white">
                  {service.title}
                </h4>
              </div>

              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <Image
                  src={service.image}
                  alt={`${service.title} certification`}
                  width={service.imageWidth}
                  height={service.imageHeight}
                  className="opacity-50 group-hover:opacity-100 transition-opacity object-contain"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary-gold border-primary-gold hover:bg-primary-gold hover:text-black transition-all duration-300"
                >
                  Más Información
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary-gold text-black hover:bg-primary-gold/90 transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Cotización
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Car, SprayCan, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import Link from "next/link";

const ServicePreview = () => {
  const services = [
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: "Recubrimiento Cerámico",
      description:
        "Protección duradera y brillo excepcional para su vehículo con nuestra tecnología cerámica de última generación.",
      href: "#ceramic-coating",
      color: "from-primary-gold/20 to-primary-gold/5",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Protection Film",
      description:
        "Máxima protección contra impactos, rayones y daños ambientales con nuestro film de protección premium.",
      href: "#ppf",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Lavado Premium",
      description:
        "Servicio de lavado detallado que mantiene y realza la belleza de su vehículo con productos de primera calidad.",
      href: "#premium-wash",
      color: "from-red-500/20 to-red-500/5",
    },
  ];

  return (
    <section
      id="service-preview"
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-trajan text-3xl text-white mb-4">
            NUESTROS SERVICIOS
          </h2>
          <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
            Experiencia y Calidad Premium
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group relative h-full bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 transition-all duration-300 hover:bg-white/10">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="bg-primary-gold/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-primary-gold group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <h4 className="font-trajan text-2xl text-white mb-4">
                      {service.title}
                    </h4>

                    <p className="text-gray-400 mb-6">{service.description}</p>

                    <div className="flex items-center text-primary-gold group-hover:gap-2 transition-all duration-300">
                      <span>Ver más</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicePreview;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Car, SprayCan, Check, CreditCard } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import CoatingComparison from "./CoatingComparison";

const ServicesSection = () => {
  const services = [
    {
      id: "ceramic-coating",
      icon: <SprayCan className="w-8 h-8" />,
      title: "RECUBRIMIENTO CERÁMICO",
      tagline: "Protección Premium para su Vehículo",
      description:
        "Nuestro recubrimiento cerámico profesional ofrece una protección incomparable y un brillo excepcional que transforma la apariencia de su vehículo.",
      features: [
        "Protección UV y química avanzada",
        "Brillo superior y duradero",
        "Repelente al agua y suciedad",
        "Facilidad de limpieza mejorada",
        "Resistencia a rayones superficiales",
        "Mantenimiento especializado disponible",
      ],
      packages: [
        {
          name: "Protección 3 Años",
          price: "$590",
          features: [
            "Protección básica",
            "Ideal para vehículos diarios",
            "Incluye garantía",
          ],
        },
        {
          name: "Protección 5 Años",
          price: "$790",
          features: [
            "Protección media",
            "Tecnología mejorada",
            "Garantía extendida",
          ],
        },
        {
          name: "Protección 9 Años",
          price: "$1200",
          features: [
            "Máxima protección",
            "Tecnología premium",
            "Garantía completa",
          ],
        },
      ],
      showRestrictions: true,
      showFinancing: true,
    },
    {
      id: "ppf",
      icon: <Shield className="w-8 h-8" />,
      title: "PAINT PROTECTION FILM (PPF)",
      tagline: "Protección Física Superior",
      description:
        "Film de protección de pintura de última generación que protege su vehículo contra impactos, rayones y deterioro ambiental.",
      features: [
        "Auto-regeneración de rayones superficiales",
        "Protección contra impactos",
        "Transparencia cristalina",
        "Garantía de 10 años",
        "Instalación profesional certificada",
        "Personalización disponible",
      ],
      priceInfo: "Empiezan desde $200 por pieza",
      showRestrictions: true,
      showFinancing: true,
    },
    {
      id: "premium-wash",
      icon: <Car className="w-8 h-8" />,
      title: "LAVADO PREMIUM",
      tagline: "Cuidado Excepcional para su Vehículo",
      description:
        "Servicio de lavado detallado que va más allá de la limpieza convencional, utilizando productos premium y técnicas especializadas.",
      features: [
        "Proceso certificado anti-microrayas",
        "Productos premium importados",
        "Secado con aire filtrado",
        "Limpieza de rines detallada",
        "Aspirado profundo",
        "Limpieza de vidrios especializada",
        "Lavado de chasis",
        "Lavado de motor",
      ],
      pricing: {
        regular: "₡18,000",
      },
      showRestrictions: true,
      showFinancing: false,
    },
  ];

  return (
    <section id="servicios" className="bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      {services.map((service) => (
        <div
          key={service.id}
          id={service.id}
          className="relative py-24 border-b border-gray-800 last:border-0"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col max-w-4xl mx-auto gap-12"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-gold/10 rounded-full text-primary-gold">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-trajan text-3xl text-white">
                      {service.title}
                    </h2>
                    <p className="text-primary-gold mt-2">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Check className="w-5 h-5 text-primary-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.packages && (
                  <div className="space-y-6">
                    <h3 className="font-trajan text-2xl text-white">
                      Paquetes Disponibles
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {service.packages.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 p-4 rounded-lg border border-gray-800"
                        >
                          <h4 className="font-trajan text-lg text-white mb-3 text-center">
                            {pkg.name}
                          </h4>
                          <div className="space-y-3 mb-4">
                            <div className="text-center">
                              <p className="text-primary-gold text-xl font-bold">
                                {pkg.price}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, fidx) => (
                              <li
                                key={fidx}
                                className="text-gray-300 text-sm flex items-center gap-2"
                              >
                                <Check className="w-4 h-4 text-primary-gold" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.priceInfo && (
                  <div className="bg-white/5 p-6 rounded-lg border border-gray-800">
                    <h3 className="font-trajan text-2xl text-white mb-4">
                      Precio
                    </h3>
                    <p className="text-primary-gold text-2xl">
                      {service.priceInfo}
                    </p>
                  </div>
                )}

                {service.pricing && (
                  <div className="bg-white/5 p-6 rounded-lg border border-gray-800">
                    <h3 className="font-trajan text-2xl text-white mb-4">
                      Precio
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-primary-gold text-2xl">
                          {service.pricing.regular}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {service.showRestrictions && (
                  <p className="text-gray-400 text-sm">
                    * Precio sujeto a cambios.
                  </p>
                )}

                {service.id === "ceramic-coating" && (
                  <div className="mt-12">
                    <h3 className="font-trajan text-2xl text-white mb-6">
                      Comparación de Recubrimientos
                    </h3>
                    <CoatingComparison />
                  </div>
                )}

                {service.showFinancing && (
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary-gold" />
                    <p className="text-gray-300">
                      Disponible financiamiento a tasa cero por 6 meses con el
                      BAC
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button
                    className="bg-primary-gold text-black hover:bg-primary-gold/90"
                    onClick={() => window.open(SOCIAL_LINKS.whatsapp, "_blank")}
                  >
                    Cotizar Ahora
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              ></motion.div>
            </motion.div>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;

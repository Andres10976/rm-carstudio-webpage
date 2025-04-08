"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Car,
  SprayCan,
  Check,
  CreditCard,
  Clock,
  Info,
  Calendar,
  Sparkles,
  RefreshCw,
  Star,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import CoatingComparison from "./CoatingComparison";
import { trackFbqEvent } from "@/lib/utils";

interface ServicePricing {
  regular: string;
  bundle?: {
    title: string;
    price: string;
    saving: string;
  };
}

const ServicesSection = () => {
  const services = [
    {
      id: "ceramic-coating",
      icon: <SprayCan className="w-8 h-8" />,
      title: "RECUBRIMIENTO DE CERÁMICO",
      tagline: "Protección Premium para su Vehículo",
      duration: "1 día y medio",
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
      restrictionsMessage: "* Precio sujeto a cambios.",
      showFinancing: true,
      buttonType: "quote",
      calendlyLink: null,
      pricing: null,
      priceInfo: null,
    },
    {
      id: "premium-wash",
      icon: <Car className="w-8 h-8" />,
      title: "LAVADO DETALLADO PREMIUM",
      tagline: "Cuidado Excepcional para su Vehículo",
      duration: "3 a 4 horas",
      description:
        "Servicio de lavado detallado que va más allá de la limpieza convencional, utilizando productos premium y técnicas especializadas.",
      features: [
        "Proceso certificado anti-microrayas",
        "Productos premium importados",
        "Secado con aire filtrado",
        "Limpieza de rines detallada",
        "Aspirado profundo",
        "Limpieza de vidrios especializada",
        "Lavado de chasis (₡10,000 adicionales)",
        "Lavado de motor (₡10,000 adicionales)",
      ],
      pricing: {
        regular: "₡18,000",
        bundle: {
          title: "Paquete Completo (Lavado + Chasis + Motor)",
          price: "₡33,000",
          saving: "¡Ahorre ₡5,000!",
        },
      } as ServicePricing,
      restrictionsMessage: "Descuentos especiales aplican para clientes RM.",
      showFinancing: false,
      buttonType: "schedule",
      calendlyLink: "https://calendly.com/rmcarstudio/lavado-premium",
      packages: null,
      priceInfo: null,
    },
    {
      id: "ceramic-maintenance",
      icon: <RefreshCw className="w-8 h-8" />,
      title: "MANTENIMIENTO DE CERÁMICO",
      tagline: "Mantenga su Protección al Máximo Rendimiento",
      duration: "2 a 3 horas",
      description:
        "Servicio esencial para clientes con recubrimiento cerámico. Evaluamos el estado de la protección, realizamos una limpieza profunda y aplicamos un refuerzo para asegurar la máxima durabilidad y rendimiento hidrofóbico.",
      features: [
        "Lavado detallado con técnica segura para cerámicos",
        "Inspección completa del estado del recubrimiento",
        "Descontaminación química y física si es necesario",
        "Aplicación de 'booster' o 'top coat' cerámico",
        "Extiende la vida útil y efectividad de su protección",
      ],
      pricing: {
        regular: "₡55,000",
      } as ServicePricing,
      restrictionsMessage: "Descuentos especiales aplican para clientes RM.",
      showFinancing: false,
      buttonType: "schedule",
      calendlyLink:
        "https://calendly.com/rmcarstudio/mantenimiento-de-ceramico",
      packages: null,
      priceInfo: null,
    },
    {
      id: "ppf",
      icon: <Shield className="w-8 h-8" />,
      title: "PAINT PROTECTION FILM (PPF)",
      tagline: "Protección Física Superior",
      duration: "Tiempos pueden variar",
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
      restrictionsMessage: "* Precio sujeto a cambios.",
      showFinancing: true,
      buttonType: "quote",
      calendlyLink: null,
      pricing: null,
      packages: null,
    },
    {
      id: "polishing-buffing",
      icon: <Sparkles className="w-8 h-8" />,
      title: "PULIDO Y ABRILLANTADO",
      tagline: "Restaure el Brillo Original de su Pintura",
      duration: "1 día",
      description:
        "Devuelva la claridad y el brillo profundo a la pintura de su vehículo. Nuestro proceso de pulido profesional elimina imperfecciones como microrayas, marcas de remolino y oxidación leve.",
      features: [
        "Corrección de pintura multi-etapa",
        "Eliminación de microrayas y defectos leves",
        "Mejora significativa del brillo y profundidad del color",
        "Preparación ideal de la superficie antes de aplicar protección",
        "Realizado por técnicos expertos",
      ],
      pricing: {
        regular: "₡150,000",
      } as ServicePricing,
      restrictionsMessage: "* Precio sujeto a cambios.",
      showFinancing: false,
      buttonType: "quote",
      packages: null,
      priceInfo: null,
    },
  ];

  const openCalendlyPopup = (calendlyLink: string | null) => {
    if (!calendlyLink) {
      console.error("No Calendly link provided for this service.");
      alert(
        "El enlace para agendar este servicio no está disponible. Por favor contáctenos."
      );
      return;
    }

    if (
      window.Calendly &&
      typeof window.Calendly.initPopupWidget === "function"
    ) {
      trackFbqEvent("Schedule");
      const calendlyUrlWithParams = `${calendlyLink}?background_color=0a0a0a&text_color=ffffff&primary_color=f7d046&hide_event_type_details=1&hide_gdpr_banner=1`;
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
    <section id="servicios" className="bg-black relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      {/* Map through services */}
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
              {/* Service Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-gold/10 rounded-full text-primary-gold">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-trajan text-3xl text-white">
                      {service.title}
                    </h2>
                    <p className="text-primary-gold mt-1">{service.tagline}</p>
                  </div>
                </div>

                {/* Display Duration */}
                {service.duration && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm ml-16">
                    <Clock className="w-4 h-4 text-primary-gold" />
                    <span>Duración estimada: {service.duration}</span>
                  </div>
                )}
              </div>

              {/* Service Details */}
              <div className="space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
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

                {/* Packages (if applicable) */}
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

                {/* Price Info (if applicable) */}
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

                {/* Pricing (if applicable, using colones format) */}
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

                    {/* --- Added Bundle Offer Display --- */}
                    {service.id === "premium-wash" &&
                      service.pricing.bundle && (
                        <div className="mt-4 pt-4 border-t border-primary-gold/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-primary-gold" />
                            <h4 className="font-trajan text-lg text-white">
                              {service.pricing.bundle.title}
                            </h4>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="text-primary-gold text-2xl font-bold">
                              {service.pricing.bundle.price}
                            </span>
                            <span className="text-green-400 font-semibold bg-green-500/10 px-2 py-1 rounded text-sm">
                              {service.pricing.bundle.saving}
                            </span>
                          </div>
                        </div>
                      )}
                    {/* --- End Bundle Offer Display --- */}
                  </div>
                )}

                {/* Restrictions Message */}
                {service.restrictionsMessage && (
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    <span>{service.restrictionsMessage}</span>
                  </p>
                )}

                {/* Coating Comparison (Specific to Ceramic Coating) */}
                {service.id === "ceramic-coating" && (
                  <div className="mt-12">
                    <h3 className="font-trajan text-2xl text-white mb-6">
                      Comparación de Recubrimientos
                    </h3>
                    <CoatingComparison />
                  </div>
                )}

                {/* Financing Info */}
                {service.showFinancing && (
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary-gold" />
                    <p className="text-gray-300">
                      Disponible financiamiento a tasa cero por 6 meses con el
                      BAC
                    </p>
                  </div>
                )}

                {/* Action Button */}
                <div className="flex gap-4">
                  {service.buttonType === "schedule" ? (
                    <Button
                      className="bg-primary-gold text-black hover:bg-primary-gold/90 flex items-center gap-2"
                      onClick={() => openCalendlyPopup(service.calendlyLink)}
                    >
                      <Calendar className="w-4 h-4" />
                      Agendar Ahora
                    </Button>
                  ) : (
                    <Button
                      className="bg-primary-gold text-black hover:bg-primary-gold/90"
                      onClick={() => {
                        trackFbqEvent("Contact");
                        window.open(SOCIAL_LINKS.whatsapp, "_blank");
                      }}
                    >
                      Cotizar Ahora
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;

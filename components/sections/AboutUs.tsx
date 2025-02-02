"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";

const AboutSection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Fundación",
      description:
        "Establecimiento de nuestra firma especializada en detallado automotriz de alta gama",
    },
    {
      year: "2020",
      title: "Certificación en Recubrimientos Cerámicos",
      description:
        "Acreditación internacional en tecnologías de protección cerámica",
    },
    {
      year: "2022",
      title: "Certificación PPF",
      description:
        "Especialización en sistemas avanzados de protección de pintura",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-trajan text-3xl text-white mb-2 tracking-wider">
                ¿QUIÉNES SOMOS?
              </h2>
              <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent leading-tight tracking-wide">
                Excelencia en Detallado Automotriz
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              En RM Car Studio, representamos la vanguardia en el cuidado y
              protección automotriz. Nuestro equipo de especialistas
              certificados internacionalmente emplea tecnologías de última
              generación y métodos avanzados para ofrecer resultados
              excepcionales en cada servicio.
            </p>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    <div className="w-20 text-primary-gold font-trajan text-2xl tracking-wider">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-trajan mb-2 tracking-wide text-lg">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image and Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/owners.png"
                alt="RM Car Studio Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
            >
              <h4 className="font-trajan text-lg text-white mb-4 text-center">
                Certificaciones Internacionales
              </h4>
              <div className="flex justify-center items-center gap-8">
                <Image
                  src="/images/gtechniq-certified.png"
                  alt="Gtechniq Certified"
                  width={140}
                  height={70}
                  className="object-contain"
                />
                <Image
                  src="/images/Stek_Certified.png"
                  alt="Stek Certified"
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

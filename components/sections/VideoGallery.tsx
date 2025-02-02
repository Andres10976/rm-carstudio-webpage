"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const VideoGallery = () => {
  // Replace these IDs with actual YouTube video IDs from their channel
  const videoIds = [
    {
      id: "v6yNucdWTAg",
      title: "Adiós a los Arañazos - 4Runner Blindada con PPF",
    },
    {
      id: "YO4BxwbbcSE",
      title: "PPF Tapa Audi - Pruebas de resistencia",
    },
    {
      id: "q3N1rA-PBKQ",
      title: "Paso a paso lavado detallado RM Car Studio",
    },
    {
      id: "LzwEQwkp5U8",
      title: "¿Qué es el PPF?",
    },
    {
      id: "R5RgwgopT0c",
      title: "Nuestra Historia - RM Car Studio",
    },
    {
      id: "CjWaIVAmQRs",
      title: "¿Por qué las personas aplican PPF en su vehículo?",
    },
  ];

  return (
    <section
      id="video-gallery"
      className="py-24 bg-black relative overflow-hidden"
    >
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
          <h2 className="font-trajan text-3xl text-white mb-4">
            GALERÍA DE VIDEOS
          </h2>
          <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
            Nuestro Trabajo en Acción
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoIds.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-video"
            >
              <iframe
                className="w-full h-full rounded-lg border border-gray-800"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VideoGallery;

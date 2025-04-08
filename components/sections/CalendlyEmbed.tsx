"use client";

import React, { useEffect, useRef } from "react";
import { CALENDLY_LINK } from "@/lib/constants";
import { Container } from "../ui/Container";
import { motion } from "framer-motion";

// Define the type for the Calendly object if it's not globally available
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
        // Removed styling object as we'll use URL params
      }) => void;
    };
  }
}

const CalendlyEmbed = () => {
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (scriptAdded.current) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      console.log("Calendly script loaded.");
      setTimeout(() => {
        const calendlyContainer = document.getElementById(
          "calendly-inline-widget"
        );
        const loadingIndicator = document.getElementById(
          "calendly-loading-indicator"
        );

        if (loadingIndicator) {
          loadingIndicator.style.display = "none";
        }

        if (
          calendlyContainer &&
          window.Calendly &&
          typeof window.Calendly.initInlineWidget === "function"
        ) {
          console.log("Initializing Calendly widget...");
          try {
            const baseCalendlyUrl = CALENDLY_LINK;
            const stylingParams = new URLSearchParams({
              hide_event_type_details: "1", // Optional: Hide details like avatar, event name etc.
              hide_gdpr_banner: "1", // Optional: Hide cookie banner (ensure compliance)
              background_color: "0a0a0a", // Dark background (no #)
              text_color: "ffffff", // White text (no #)
              primary_color: "F7D046", // Gold accent (no #)
            }).toString();

            const finalCalendlyUrl = `${baseCalendlyUrl}?${stylingParams}`;

            window.Calendly.initInlineWidget({
              url: finalCalendlyUrl,
              parentElement: calendlyContainer,
              prefill: {},
              utm: {},
            });
          } catch (error) {
            console.error("Error initializing Calendly widget:", error);
            if (loadingIndicator) {
              loadingIndicator.innerText = "Error al cargar el calendario.";
              loadingIndicator.style.display = "flex";
            }
          }
        } else {
          console.error(
            "Calendly container not found, Calendly object not ready, or initInlineWidget is not a function."
          );
          if (loadingIndicator) {
            loadingIndicator.innerText = "No se pudo cargar el calendario.";
            loadingIndicator.style.display = "flex";
          }
        }
      }, 100);
    };

    script.onerror = () => {
      console.error("Failed to load Calendly widget script.");
      const loadingIndicator = document.getElementById(
        "calendly-loading-indicator"
      );
      if (loadingIndicator) {
        loadingIndicator.innerText = "Error al cargar script del calendario.";
        loadingIndicator.style.display = "flex";
      }
    };

    document.body.appendChild(script);
    scriptAdded.current = true;

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript && existingScript.parentNode) {
        console.log("Cleaning up Calendly script.");
        existingScript.parentNode.removeChild(existingScript);
      }
      scriptAdded.current = false;
      const calendlyContainer = document.getElementById(
        "calendly-inline-widget"
      );
      if (calendlyContainer) {
        calendlyContainer.innerHTML = "";
        calendlyContainer.innerHTML = `
            <div id="calendly-loading-indicator" class="flex justify-center items-center h-full text-white">
                Cargando Calendario...
            </div>`;
      }
    };
  }, []);

  return (
    <section
      id="calendly-embed-section"
      className="py-16 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,208,70,0.05)_0%,rgba(0,0,0,0)_70%)]" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-trajan text-3xl text-white mb-4">
            AGENDE SU CITA
          </h2>
          <h3 className="font-trajan text-4xl mb-6 bg-gradient-to-r from-primary-gold to-yellow-300 bg-clip-text text-transparent">
            Reserve Fácilmente en Línea
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Utilice el calendario a continuación para seleccionar el servicio y
            la hora que mejor le convengan.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            id="calendly-inline-widget"
            className="calendly-inline-widget"
            style={{
              minWidth: "320px",
              height: "750px",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#0a0a0a",
            }}
            data-auto-load="false"
          >
            <div
              id="calendly-loading-indicator"
              className="flex justify-center items-center h-full text-white"
            >
              Cargando Calendario...
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CalendlyEmbed;

// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";
import { NavbarProvider } from "@/lib/navbar-context";

export const metadata: Metadata = {
  title: "RM Car Studio | Detallado Automotriz Profesional Costa Rica",
  description:
    "Servicios profesionales de detallado automotriz, recubrimiento cerámico y protección de pintura en Costa Rica. Certificados Gtechniq, STEK y más. Protección premium para su vehículo.",
  keywords: [
    "detallado automotriz",
    "recubrimiento cerámico",
    "protección de pintura",
    "car detailing Costa Rica",
    "ceramic coating",
    "paint protection film",
    "gtechniq certified",
    "stek certified",
    "autodetailing profesional",
  ],
  authors: [{ name: "RM Car Studio" }],
  creator: "RM Car Studio",
  publisher: "RM Car Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://rmcarstudio.com",
    siteName: "RM Car Studio",
    title: "RM Car Studio | Detallado Automotriz Profesional Costa Rica",
    description:
      "Servicios profesionales de detallado automotriz, recubrimiento cerámico y protección de pintura en Costa Rica. Certificados Gtechniq, STEK y más.",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "RM Car Studio - Detallado Automotriz Profesional",
      },
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "RM Car Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RM Car Studio | Detallado Automotriz Profesional Costa Rica",
    description:
      "Servicios profesionales de detallado automotriz, recubrimiento cerámico y protección de pintura en Costa Rica.",
    images: ["/images/hero-image.png"],
  },
  verification: {
    google: "qk2zvevGo0DLHAAUlisXwSjLCH7zn7GQs3uNd4E6_cc",
  },
  alternates: {
    canonical: "https://rmcarstudio.com",
    languages: {
      "es-CR": "https://rmcarstudio.com",
      es: "https://rmcarstudio.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const PIXEL_ID = "757186651321955";

  return (
    <html lang="es">
      <head>
        {/* Font Links */}
        <link
          href="https://db.onlinewebfonts.com/c/c07d5c6528b6cc0eac08afd7a3199657?family=TrajanPro-Regular"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/12d2fa3dcf227b9538084a6bcfeafcf0?family=Trajan+Pro+Bold"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/2399cc27c387c2d15426ad977462df87?family=Comfortaa+Regular"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/70f9644542515286487b2b268beffbf8?family=Comfortaa+Bold+V2"
          rel="stylesheet"
        />

        {/* Meta Pixel Implementation */}
        <Script
          id="fb-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
            `,
          }}
        />
        <Script
          id="fb-pixel-pageview"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
               fbq('track', 'PageView');
             `,
          }}
        />

        {/* --- ADDED: Calendly Widget Styles --- */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />

        {/* Structured Data - JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://rmcarstudio.com/#business",
              name: "RM Car Studio",
              description:
                "Servicios profesionales de detallado automotriz, recubrimiento cerámico y protección de pintura en Costa Rica",
              url: "https://rmcarstudio.com",
              logo: "https://rmcarstudio.com/images/logo.png",
              image: [
                "https://rmcarstudio.com/images/hero-image.png",
                "https://rmcarstudio.com/images/logo.png",
              ],
              telephone: "+506-7267-0164",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CR",
                addressLocality: "Costa Rica",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.7489",
                longitude: "-83.7534",
              },
              openingHours: "Mo-Sa 08:00-18:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "Country",
                name: "Costa Rica",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Detallado Automotriz",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Recubrimiento Cerámico",
                      description:
                        "Protección cerámica profesional para la pintura del vehículo",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Detallado Premium",
                      description:
                        "Servicio completo de limpieza y detallado automotriz",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Paint Protection Film",
                      description:
                        "Película de protección transparente para la pintura",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.instagram.com/rmcarstudio",
                "https://www.facebook.com/rmcarstudio",
              ],
            }),
          }}
        />
      </head>
      <body className="font-comfortaa">
        <NavbarProvider>
          {children}
          <WhatsAppBubble />
        </NavbarProvider>

        {/* No-script Fallback for Meta Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Facebook Pixel"
          />
        </noscript>

        {/* --- ADDED: Calendly Widget Script --- */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload" // Load after page content
        />
      </body>
    </html>
  );
}

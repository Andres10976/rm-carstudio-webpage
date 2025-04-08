// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";
import { NavbarProvider } from "@/lib/navbar-context";

export const metadata: Metadata = {
  title: "RM Car Studio | Detallado Automotriz Profesional",
  description:
    "Servicios profesionales de detallado automotriz, recubrimiento cerámico y protección de pintura en Costa Rica",
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

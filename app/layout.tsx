import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppBubble } from "@/components/ui/WhatsAppBubble";

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
  return (
    <html lang="es">
      <head>
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
      </head>
      <body className="font-comfortaa">
        {children}
        <WhatsAppBubble />
      </body>
    </html>
  );
}

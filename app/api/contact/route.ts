// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Validate environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

if (!RESEND_API_KEY) {
  console.error("Missing RESEND_API_KEY environment variable");
}

if (!CONTACT_EMAIL) {
  console.error("Missing CONTACT_EMAIL environment variable");
}

// Initialize Resend only if we have an API key
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      throw new Error("Email service not configured properly");
    }

    if (!CONTACT_EMAIL) {
      throw new Error("Recipient email not configured");
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Enhanced validation
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "El nombre es requerido" },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "El correo electrónico es requerido" },
        { status: 400 }
      );
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "El mensaje es requerido" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de correo electrónico inválido" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "RM Car Studio <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      subject: `Nueva Consulta de ${name}`,
      html: `
        <h2>Nuevo Mensaje del Formulario de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 14px;">Este mensaje fue enviado desde el formulario de contacto de RM Car Studio.</p>
      `,
      text: `
        Nuevo Mensaje del Formulario de Contacto

        Nombre: ${name}
        Correo: ${email}
        Teléfono: ${phone || "No proporcionado"}
        
        Mensaje:
        ${message}
        
        ---
        Este mensaje fue enviado desde el formulario de contacto de RM Car Studio.
      `,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        error:
          "Error al enviar el mensaje. Por favor intente nuevamente más tarde.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}

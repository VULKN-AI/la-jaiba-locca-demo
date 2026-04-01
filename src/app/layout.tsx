import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "La Jaiba Locca | Mariscos Gourmet en Acapulco",
  description: "Tradicional restaurante de mariscos gourmet en Acapulco. Sazón inigualable, productos frescos del mar y una experiencia única. Dos sucursales: Costa Azul y Diamante.",
  keywords: "mariscos, Acapulco, restaurante, seafood, La Jaiba Locca, Costa Azul, Diamante, ceviche, camarones",
  openGraph: {
    title: "La Jaiba Locca | Mariscos Gourmet en Acapulco",
    description: "Tradición, sazón y las mejores delicias del mar en Acapulco. Reserva tu mesa hoy.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

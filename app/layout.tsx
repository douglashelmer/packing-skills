import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Packing Skills — IAPRO.BLEND | Do zero ao primeiro projeto com 3D + IA em 1 hora",
  description:
    "Aprenda a criar imagens de produto profissionais com Blender e IA. Modelagem 3D, rótulo, materiais, composição com IA — tudo em menos de 1 hora. R$ 47.",
  openGraph: {
    title: "Packing Skills — IAPRO.BLEND",
    description: "Do zero ao primeiro projeto com 3D + IA em menos de 1 hora.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">{children}</body>
      <Script id="utmify-pixel" strategy="afterInteractive">{`
        window.pixelId = "6a3467fa9ae8e20f7f24905c";
        var a = document.createElement("script");
        a.setAttribute("async", "");
        a.setAttribute("defer", "");
        a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
        document.head.appendChild(a);
      `}</Script>
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
      />
    </html>
  );
}

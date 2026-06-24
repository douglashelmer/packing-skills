import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Packing Skills — IAPRO.BLEND | Do zero ao primeiro projeto com 3D + IA em 1 hora · $9",
  description:
    "Aprenda a criar imagens de produto profissionais com Blender e IA. Modelagem 3D, rótulo, materiais, composição com IA — tudo em menos de 1 hora. $9.",
  openGraph: {
    title: "Packing Skills — IAPRO.BLEND",
    description: "Do zero ao primeiro projeto com 3D + IA em menos de 1 hora. $9.",
    type: "website",
  },
};

export default function UsdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

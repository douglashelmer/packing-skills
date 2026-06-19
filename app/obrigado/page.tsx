import type { Metadata } from "next";
import VideoObrigado from "./VideoObrigado";

export const metadata: Metadata = {
  title: "Obrigado — Packing Skills",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#080c04] text-[#e8e4d4] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl text-center">
        <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-10">
          Assista e veja como{" "}
          <span className="text-[#b6d432]">acessar sua compra.</span>
        </h1>

        <VideoObrigado />
      </div>
    </main>
  );
}

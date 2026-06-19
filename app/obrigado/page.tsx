import type { Metadata } from "next";

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

        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
          {/* Cole aqui o embed do VTurb */}
          <div className="aspect-video flex items-center justify-center bg-[#0c110a] text-[#5a5750] text-sm">
            [ Cole aqui o embed do vídeo ]
          </div>
        </div>
      </div>

    </main>
  );
}

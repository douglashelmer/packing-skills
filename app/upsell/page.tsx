import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sua compra não está completa — IAPRO.BLEND",
  robots: { index: false, follow: false },
};

const UPSELL_CHECKOUT = "#"; // TODO: substituir pelo link do checkout do IAPRO R$297

export default function UpsellPage() {
  return (
    <main className="min-h-screen bg-[#080c04] text-[#e8e4d4] flex flex-col items-center px-4 py-10 sm:py-16">

      {/* Progress bar topo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1.5 bg-white/10 w-full">
          <div className="h-full bg-red-500 w-[90%] transition-all" style={{ boxShadow: "0 0 10px rgba(239,68,68,0.6)" }} />
        </div>
        <div className="bg-red-950/80 backdrop-blur-sm text-red-300 text-[10px] font-black uppercase tracking-widest text-center py-1 px-4">
          ⚠ Essa oferta fecha quando você sair dessa página
        </div>
      </div>

      <div className="h-10" />

      {/* Header urgência */}
      <div className="w-full max-w-3xl text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          Atenção — Não feche essa página
        </span>

        <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
          Sua compra foi confirmada —{" "}
          <span className="text-[#b6d432]">mas ainda não está completa.</span>
        </h1>

        <p className="text-[#9a9680] text-lg sm:text-xl max-w-xl mx-auto">
          Assista o vídeo abaixo até o final e ganhe um{" "}
          <strong className="text-[#e8e4d4]">bônus surpresa</strong> exclusivo
          para quem chegou aqui.
        </p>
      </div>

      {/* Player */}
      <div className="w-full max-w-3xl mb-10">
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
          {/* Cole aqui o embed do VTurb */}
          <div className="aspect-video flex items-center justify-center bg-[#0c110a] text-[#5a5750] text-sm">
            [ Cole aqui o embed do vídeo ]
          </div>
        </div>
      </div>

      {/* Oferta abaixo do vídeo */}
      <div className="w-full max-w-2xl text-center">
        <div className="bg-[#121b0c] border border-[#b6d432]/15 rounded-3xl p-8 sm:p-12 mb-6"
          style={{ boxShadow: "0 0 60px -10px rgba(182,212,50,0.2), 0 0 120px -30px rgba(182,212,50,0.08)" }}>

          <p className="text-[#9a9680] text-sm uppercase tracking-widest font-bold mb-2">
            Oferta exclusiva — só nessa página
          </p>

          <h2 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl mb-2 leading-tight">
            Formação <span className="text-[#b6d432]">IAPRO.BLEND</span> completa
          </h2>

          <p className="text-[#9a9680] text-base mb-8 max-w-lg mx-auto">
            O sistema completo de 3D + IA para criar projetos de R$600 a R$2.100
            — sem estúdio, sem experiência prévia.
          </p>

          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span className="text-[#5a5750] text-lg line-through">R$ 897</span>
            <div className="flex items-start">
              <span className="text-[#b6d432] font-black text-2xl leading-none mt-1">R$</span>
              <span className="text-[#b6d432] font-black text-7xl sm:text-8xl leading-none tabular-nums">297</span>
            </div>
          </div>

          <a
            href={UPSELL_CHECKOUT}
            className="inline-flex items-center gap-3 bg-[#b6d432] text-[#080c04] font-black text-lg sm:text-xl px-10 py-5 rounded-full hover:brightness-110 active:scale-[0.97] transition-all duration-150 mb-4"
          >
            Sim, quero a formação completa →
          </a>

          <p className="text-[#5a5750] text-sm">
            Pagamento único · Acesso vitalício · Garantia de 7 dias
          </p>
        </div>

        <a
          href="https://packing-skills.pages.dev"
          className="text-[#5a5750] text-sm hover:text-[#9a9680] transition-colors underline underline-offset-4"
        >
          Não, obrigado — quero só o Packing Skills
        </a>
      </div>
    </main>
  );
}

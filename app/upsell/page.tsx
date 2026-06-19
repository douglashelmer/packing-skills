import type { Metadata } from "next";
import Script from "next/script";
import VideoUpsell from "./VideoUpsell";

export const metadata: Metadata = {
  title: "Sua compra não está completa — IAPRO.BLEND",
  robots: { index: false, follow: false },
};

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
        <VideoUpsell />
      </div>

      {/* Hotmart Sales Funnel SDK */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
      />
      <Script id="hotmart-funnel-init" strategy="afterInteractive">{`
        (function() {
          function mount() {
            if (window.checkoutElements) {
              checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell');
            } else {
              setTimeout(mount, 200);
            }
          }
          mount();
        })();
      `}</Script>

      {/* Sincronizar exibição com o vídeo: aparece em 2:56 (176s) */}
      <Script id="vturb-upsell-delay" strategy="afterInteractive">{`
        (function() {
          function initDelay() {
            var player = document.querySelector("vturb-smartplayer");
            if (!player) { setTimeout(initDelay, 500); return; }
            player.addEventListener("player:ready", function() {
              player.displayHiddenElements(176, [".vturb-delayed"], { persist: true });
            });
          }
          initDelay();
        })();
      `}</Script>

      {/* Widget aparece no 2:56 */}
      <div className="vturb-delayed w-full max-w-2xl" style={{ display: "none" }}>
        <div id="hotmart-sales-funnel-upsell" className="w-full" />
      </div>

    </main>
  );
}

"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Check,
  X,
  Shield,
  Package,
  Layers,
  Palette,
  Camera,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const CHECKOUT =
  "https://pay.hotmart.com/Y106393670A?off=bxk9fmp2&checkoutMode=10";

function AddonBox() {
  const features = [
    "Prompt em texto → imagem gerada",
    "Travar produto na cena",
    "Manter câmera e iluminação",
    "Gerar variações em lote",
  ];
  return (
    <div className="relative select-none" style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.9))" }}>
      {/* depth layers */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-lime/8" />
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-lime/12" />

      {/* main face */}
      <div className="relative bg-gradient-to-br from-[#0e1a09] to-[#080c04] rounded-2xl overflow-hidden" style={{ width: 280 }}>
        {/* decorative lime waves */}
        <svg
          className="absolute right-0 top-0 h-full w-40 opacity-20 pointer-events-none"
          viewBox="0 0 160 400"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M140,0 C60,80 140,160 60,240 C-20,320 140,400 140,400" stroke="#b6d432" strokeWidth="3" fill="none" />
          <path d="M110,0 C30,80 110,160 30,240 C-50,320 110,400 110,400" stroke="#b6d432" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M160,30 C80,110 160,190 80,270 C0,350 80,400 40,400" stroke="#b6d432" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>

        {/* spine text */}
        <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-dimmer text-[8px] font-black uppercase tracking-[0.4em] whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            nexIA Image · doug Academy
          </span>
        </div>

        <div className="pl-10 pr-6 pt-7 pb-0">
          <span className="inline-block border border-lime/30 text-lime text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-5">
            ADDON · BLENDER
          </span>

          <div className="mb-4">
            <div className="font-display font-black text-5xl leading-none text-foreground">
              nex<span className="text-lime">IA</span>
            </div>
            <div className="font-display font-black text-5xl leading-none text-lime">
              Image
            </div>
          </div>

          <p className="text-dimmer text-[10px] font-semibold uppercase tracking-widest mb-5">
            Geração com IA · Alta qualidade · 2.5K
          </p>

          <div className="space-y-2 mb-7">
            {features.map((f) => (
              <div key={f} className="flex gap-2 items-start">
                <span className="text-lime text-sm leading-none mt-0.5">·</span>
                <span className="text-muted text-xs leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-lime/10 border-t border-lime/20 px-10 py-3 flex items-center justify-between">
          <span className="text-lime text-xs font-bold tabular-nums">v2.5.1</span>
          <span className="text-dimmer text-xs">Blender 4.0+</span>
        </div>
      </div>
    </div>
  );
}

function Btn({
  href,
  size = "lg",
  children,
}: {
  href: string;
  size?: "sm" | "lg";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-block bg-lime text-background font-black uppercase tracking-wide rounded-xl",
        "transition-all duration-200 hover:bg-lime-dark hover:scale-105 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime/40",
        size === "lg" ? "px-8 py-5 text-xl" : "px-6 py-3 text-base",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Card3D({ img, label }: { img: string; label: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "700px" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-xl overflow-hidden card-border shadow-2xl"
      >
        <Image
          src={img}
          alt={label}
          width={400}
          height={700}
          className="w-full h-auto block"
        />
        {/* Dynamic shine */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(182,212,50,0.18) 0%, transparent 65%)`
            ),
          }}
        />
        {/* Label bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime">
            {label}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

const modules = [
  { img: "/modulo-1.jpg", label: "Introdução ao Curso" },
  { img: "/modulo-2.jpg", label: "Modelo 3D" },
  { img: "/modulo-3.jpg", label: "Criação do Rótulo" },
  { img: "/modulo-4.jpg", label: "Materiais" },
  { img: "/modulo-5.jpg", label: "Criação da Cena" },
  { img: "/modulo-6.jpg", label: "Composição com IA" },
];

const moduleDetails = [
  {
    icon: Package,
    title: "Modelagem do Frasco",
    desc: "Box modeling direto ao ponto. O método funciona para qualquer embalagem, não só o serum.",
  },
  {
    icon: Palette,
    title: "Criação do Rótulo",
    desc: "Monte o rótulo e aplique no modelo 3D. Adapte para qualquer marca em minutos.",
  },
  {
    icon: Layers,
    title: "Materiais Realistas",
    desc: "Vidro, plástico transparente e opaco, líquido interno. Presets prontos para qualquer projeto.",
  },
  {
    icon: Camera,
    title: "Iluminação e Cena",
    desc: "Câmera, luz e ambiente. O setup de estúdio virtual que entrega imagem limpa sem fundo especial.",
  },
  {
    icon: Sparkles,
    title: "Composição com IA",
    desc: "Use o addon nexIA Image. Você descreve em texto. A IA entrega o ambiente e a atmosfera.",
  },
  {
    icon: Package,
    title: "Render Final",
    desc: "Exporta em alta resolução, pronto pra anúncio, site ou embalagem física.",
  },
];

const faqs = [
  {
    q: "Preciso ter o Blender instalado antes?",
    a: "Sim. O Blender é gratuito e você baixa em blender.org. A instalação leva 2 minutos.",
  },
  {
    q: "Funciona no Mac?",
    a: "Funciona. Blender roda em Mac, Windows e Linux sem diferença no processo.",
  },
  {
    q: "O que é o addon nexIA Image?",
    a: "É um addon para Blender que usa IA para gerar imagens diretamente no software. No curso você aprende a instalar e usar para compor a cena do seu produto com IA.",
  },
  {
    q: "Quanto tempo tenho de acesso?",
    a: "Acesso vitalício. Assistiu hoje, assiste de novo daqui 6 meses quando precisar de referência.",
  },
  {
    q: "Posso usar o método no meu produto, não só no serum do curso?",
    a: "Pode. O processo é o mesmo para qualquer frasco ou embalagem. O serum é o projeto-modelo — você aplica em qualquer produto que tiver.",
  },
  {
    q: "Posso parcelar?",
    a: "Pode. Em até 3x de R$ 16,91 no cartão.",
  },
];

export default function Home() {
  return (
    <>
      <main className="bg-background text-foreground overflow-x-hidden">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-lime/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-dimmer text-xs tracking-widest uppercase hidden sm:inline">
                {"{FORMAÇÃO}"}
              </span>
              <span className="font-display font-black text-xl text-foreground">
                IAPRO<span className="text-lime">.</span>BLEND
              </span>
            </div>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-lime text-background font-black text-sm uppercase tracking-wide px-5 py-2.5 rounded-xl hover:bg-lime-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              Quero entrar — R$ 47
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative overflow-hidden">

          {/* ── MOBILE ONLY: full-bleed product image at top ── */}
          <motion.div
            className="lg:hidden relative w-full mt-16"
            style={{ height: "clamp(260px, 85vw, 460px)" }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/resultado.png"
              alt="4 frascos HELMER Velune criados no curso com Blender + nexIA"
              fill
              className="object-cover object-center"
              priority
            />
            {/* top fade: nav stays legible */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background via-background/60 to-transparent" />
            {/* bottom fade: blends into dark bg */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
            {/* badge */}
            <div className="absolute bottom-5 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-lime/30 text-lime text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                Resultado do curso — Blender + nexIA
              </span>
            </div>
          </motion.div>

          {/* ── DESKTOP ONLY: background layers ── */}
          <div className="hidden lg:block absolute inset-0 z-0">
            <Image
              src="/blender-screen.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.18]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#b6d432 1px,transparent 1px),linear-gradient(90deg,#b6d432 1px,transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-lime/[0.06] blur-[140px] pointer-events-none" />
          </div>

          {/* ── CONTENT ── */}
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 lg:min-h-screen lg:flex lg:items-center lg:pt-28 lg:pb-20">
            <div className="w-full grid lg:grid-cols-[1fr_460px] gap-6 lg:gap-14 items-center">

              {/* LEFT: copy */}
              <div className="pt-4 lg:pt-0">
                <FadeIn>
                  <span className="inline-flex items-center gap-2 bg-lime/10 border border-lime/25 text-lime text-xs font-black uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    Packing Skills · IAPRO.BLEND
                  </span>
                </FadeIn>

                <FadeIn delay={0.07}>
                  <h1 className="font-display font-black text-[clamp(2.8rem,12vw,5.5rem)] sm:text-6xl md:text-7xl leading-[0.88] mb-5">
                    Seu primeiro<br />
                    projeto com{" "}
                    <span className="text-gradient">3D&nbsp;+&nbsp;IA</span><br />
                    em menos de<br />
                    <span className="text-foreground">1 hora.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.13}>
                  <p className="text-muted text-base sm:text-lg md:text-xl max-w-lg mb-7 leading-relaxed">
                    Você modela o frasco, aplica o rótulo, configura materiais
                    e gera a cena com IA — e sai com imagem de produto que
                    parece saída de estúdio.{" "}
                    <strong className="text-foreground font-semibold">
                      Do zero. Em 60 minutos.
                    </strong>
                  </p>
                </FadeIn>

                <FadeIn delay={0.19}>
                  <a
                    href={CHECKOUT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex sm:inline-flex items-center justify-center gap-3 bg-lime text-background font-black uppercase tracking-wide rounded-xl px-8 py-5 text-xl transition-all duration-200 hover:bg-lime-dark hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime/40 mb-5"
                  >
                    Sim, quero aprender agora →
                  </a>
                </FadeIn>

                <FadeIn delay={0.24}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-foreground font-black text-3xl tabular-nums">R$ 47</span>
                    <span className="text-dimmer text-sm">·</span>
                    <span className="text-muted text-sm">acesso vitalício</span>
                    <span className="text-dimmer text-sm">·</span>
                    <span className="text-muted text-sm">3x de R$ 16,91</span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.28}>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted mb-8 sm:flex sm:flex-wrap sm:gap-x-6">
                    {[
                      "Acesso vitalício",
                      "Bônus: Addon nexIA Image",
                      "Bônus: Blender Basics",
                      "Garantia 7 dias",
                    ].map((seal) => (
                      <span key={seal} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-lime shrink-0" aria-hidden="true" />
                        {seal}
                      </span>
                    ))}
                  </div>
                </FadeIn>

                {/* Stats bar */}
                <FadeIn delay={0.33}>
                  <div className="flex flex-wrap gap-x-7 gap-y-3 pt-5 border-t border-white/[0.06]">
                    {[
                      { n: "6", label: "Módulos" },
                      { n: "≈60", label: "Minutos" },
                      { n: "+2", label: "Bônus" },
                      { n: "7", label: "Dias de garantia" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-baseline gap-1.5">
                        <span className="font-display font-black text-2xl text-lime leading-none">
                          {s.n}
                        </span>
                        <span className="text-dimmer text-[11px] uppercase tracking-wider">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* RIGHT: desktop showcase */}
              <div className="hidden lg:flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.86, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="relative w-full"
                >
                  <div className="absolute inset-[-15%] bg-lime/[0.12] blur-[90px] rounded-full pointer-events-none" />
                  <motion.div
                    animate={{ y: [0, -16, 0] }}
                    transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1.4 }}
                    className="relative z-10"
                  >
                    <div className="absolute top-3 left-3 z-20">
                      <span className="inline-flex items-center gap-1.5 bg-black/65 backdrop-blur-md border border-lime/25 text-lime text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                        criado no curso
                      </span>
                    </div>
                    <Image
                      src="/resultado.png"
                      alt="4 frascos HELMER Velune — renderizados com Blender e nexIA Image"
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority
                    />
                    <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center">
                      <span className="bg-black/65 backdrop-blur-md border border-white/10 text-muted text-[9px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Blender + nexIA Image · 2.5K
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* scroll hint — desktop only */}
          <motion.div
            className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-dimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </section>

        {/* MARQUEE STRIP */}
        <div className="overflow-hidden border-y border-lime/10 bg-lime/[0.025] py-3.5">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 pr-10 text-[11px] font-black uppercase tracking-[0.2em] text-dimmer"
              >
                Packing Skills
                <span className="text-lime text-base leading-none">✦</span>
                3D + IA
                <span className="text-lime text-base leading-none">✦</span>
                Resultado Profissional
                <span className="text-lime text-base leading-none">✦</span>
                R$ 47
                <span className="text-lime text-base leading-none">✦</span>
                Acesso Vitalício
                <span className="text-lime text-base leading-none">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* PROBLEM */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-none mb-14 text-balance">
                Você sabe que imagem de produto faz diferença.{" "}
                <span className="text-muted">
                  Só não sabe fazer uma que realmente vende.
                </span>
              </h2>
            </FadeIn>

            <div className="space-y-7">
              {[
                "Fotógrafo de produto custa R$ 500, R$ 800, R$ 1.200 por sessão — e você não fica com o arquivo 3D pra testar variação de cor, de rótulo, de cena.",
                "O Canva e o Photoshop chegaram no limite. Fundo branco ficou ultrapassado.",
                "Você já viu aquelas imagens flutuando, com água, com textura, com luz perfeita — e não faz ideia de como foram feitas.",
              ].map((text, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-4 text-muted text-lg md:text-xl leading-relaxed">
                    <span className="text-lime font-black mt-0.5 shrink-0">
                      →
                    </span>
                    <p>{text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.28}>
              <p className="mt-12 text-foreground text-xl md:text-2xl font-semibold italic">
                Não é falta de talento. É falta do processo certo — do zero ao
                render final.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* AGITATE + PROOF IMAGE */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <FadeIn>
                <div>
                  <h2 className="font-display font-black text-4xl sm:text-5xl leading-none mb-6">
                    Enquanto você procrastina, o concorrente já está com
                    imagem que{" "}
                    <span className="text-lime">para o feed.</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mb-6">
                    Alguém com o mesmo produto seu — ou pior — vende mais
                    porque a embalagem parece premium. A imagem de produto é o
                    primeiro vendedor. Antes de você abrir a boca.
                  </p>
                  <p className="text-foreground text-lg font-semibold italic">
                    Todo dia sem a imagem certa é um dia com conversão menor do
                    que poderia ser.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden card-border">
                  <Image
                    src="/resultado.png"
                    alt="4 frascos Velune HELMER renderizados com nexIA Image — resultado real do curso"
                    width={600}
                    height={900}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent px-5 py-5">
                    <p className="text-muted text-sm">
                      Resultado real gerado pelo addon nexIA.{" "}
                      <span className="text-foreground font-semibold">
                        Produto Velune — HELMER.
                      </span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-none mb-4">
                  É isso que o{" "}
                  <span className="text-gradient">Packing Skills</span> ensina.
                </h2>
                <p className="text-muted text-xl max-w-2xl mx-auto">
                  Blender + IA. Um projeto real. Um frasco de serum — do zero,
                  em menos de 1 hora.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  num: "01",
                  icon: Package,
                  title: "Você modela o frasco",
                  desc: "Partindo de um cubo no Blender, constrói a geometria do frasco. Sem precisar saber nada de 3D antes.",
                },
                {
                  num: "02",
                  icon: Layers,
                  title: "Aplica rótulo e materiais",
                  desc: "Seu rótulo vai direto pro frasco. Vidro, plástico, líquido — materiais pré-configurados prontos pra usar.",
                },
                {
                  num: "03",
                  icon: Sparkles,
                  title: "A IA compõe a cena",
                  desc: "Com o addon nexIA Image, você descreve a cena em texto. A IA gera o fundo, a luz e a atmosfera.",
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl p-8 card-border relative overflow-hidden group hover:accent-glow transition-all duration-300">
                    <span className="absolute top-3 right-5 font-display font-black text-8xl text-lime/5 select-none leading-none">
                      {step.num}
                    </span>
                    <step.icon
                      className="w-8 h-8 text-lime mb-4"
                      aria-hidden="true"
                    />
                    <h3 className="font-display font-black text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.32}>
              <p className="text-center text-muted text-xl mt-12 italic">
                Você não vira artista 3D.{" "}
                <span className="text-foreground font-semibold">
                  Vira alguém que produz imagem de produto profissional.
                </span>{" "}
                O Blender e a IA são as ferramentas.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* MODULE CARDS */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-lime text-sm font-black uppercase tracking-widest">
                  O Curso
                </span>
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-none mt-2">
                  6 módulos. Um projeto completo.
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-14">
              {modules.map((m, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <Card3D img={m.img} label={m.label} />
                </FadeIn>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {moduleDetails.map((m, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex gap-4 p-5 rounded-xl bg-card card-border">
                    <m.icon
                      className="w-5 h-5 text-lime shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        {m.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* BONUS NEXIA */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="inline-block bg-lime text-background text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                  🎁 Bônus incluído
                </span>
                <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-none">
                  Addon nexIA Image — grátis com o curso.
                </h2>
              </div>
            </FadeIn>

            {/* Box + panel layout */}
            <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
              <FadeIn className="flex justify-center md:justify-end">
                <AddonBox />
              </FadeIn>
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-muted text-lg leading-relaxed mb-6">
                    O addon instala direto no Blender — sem API key, sem conta externa. Você usa a conta Gemini do Google pra gerar as imagens. Escreve o que quer em texto e a IA entrega o fundo, a luz e a atmosfera certa pro produto.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Prompt em português — descreva a cena e a IA gera",
                      "Trava o produto no lugar enquanto só o fundo muda",
                      "Mantém câmera e iluminação entre gerações",
                      "Gera variações de ângulo em lote com 1 clique",
                      "Resolução nativa até 2.5K — pronto pra anúncio",
                    ].map((f, i) => (
                      <li key={i} className="flex gap-3 text-muted text-base">
                        <Check className="w-5 h-5 text-lime shrink-0 mt-0.5" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground text-lg font-semibold">
                    Normalmente vendido separado. Aqui vem incluído no Packing Skills.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Panel screenshot */}
            <FadeIn delay={0.15}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-card card-border rounded-2xl p-8">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl mb-4">
                    O painel que você vai usar no Blender.
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-4">
                    Depois de modelar e texturizar o frasco, você abre o painel do nexIA, digita a descrição da cena — e clica em Render. Em segundos você tem a imagem de produto finalizada.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Travar Produto", "Manter Câmera", "Manter Iluminação", "Gerar Variações"].map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-lime border border-lime/25 rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="rounded-xl overflow-hidden card-border max-w-xs w-full">
                    <Image
                      src="/addon-panel.png"
                      alt="Painel nexIA v2.5.1 no Blender — Travar Produto, Manter Câmera, Render"
                      width={380}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* BONUS BLENDER BASICS */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl border border-lime/15 bg-card p-8 sm:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                {/* lime orb bg */}
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-lime/[0.05] blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block bg-lime/10 border border-lime/25 text-lime text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-5">
                    🎁 Bônus #2 — Incluído
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-none mb-4">
                    Curso Blender Basics —{" "}
                    <span className="text-gradient">grátis.</span>
                  </h2>
                  <p className="text-muted text-lg leading-relaxed max-w-xl mb-6">
                    Instalação, painéis, movimentação, modo de edição, modelagem básica, UV mapping e iluminação. Tudo que você precisa saber antes de começar o projeto — em menos de 2h, direto ao ponto.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {[
                      "Instalação do Blender (gratuito) passo a passo",
                      "Navegação e painéis — sem travar na interface",
                      "Modo de edição e conceitos de modelagem",
                      "UV Mapping básico — como aplicar texturas no modelo",
                      "Iluminação e câmera — fundamentos que usará no projeto",
                    ].map((f, i) => (
                      <li key={i} className="flex gap-3 text-muted text-sm leading-snug">
                        <Check className="w-4 h-4 text-lime shrink-0 mt-0.5" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div>
                      <span className="text-dimmer text-sm line-through mr-2">R$ 197</span>
                      <span className="text-lime font-black text-2xl">R$ 0</span>
                      <span className="text-muted text-sm ml-1">— incluso no Packing Skills</span>
                    </div>
                  </div>
                </div>

                {/* Visual aside */}
                <div className="relative z-10 hidden md:flex flex-col items-center justify-center gap-3 min-w-[160px]">
                  <div className="w-24 h-24 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mb-2">
                    <Layers className="w-10 h-10 text-lime" aria-hidden="true" />
                  </div>
                  <span className="text-center text-xs font-black uppercase tracking-widest text-dimmer">
                    Blender<br />Basics
                  </span>
                  <span className="text-lime font-black text-lg">Grátis</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MARQUEE 2 */}
        <div className="overflow-hidden border-y border-lime/10 bg-lime/[0.025] py-3.5">
          <div className="marquee-track flex whitespace-nowrap" style={{ animationDirection: "reverse" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 pr-10 text-[11px] font-black uppercase tracking-[0.2em] text-dimmer"
              >
                Blender Basics
                <span className="text-lime text-base leading-none">✦</span>
                3D do Zero
                <span className="text-lime text-base leading-none">✦</span>
                UV Mapping
                <span className="text-lime text-base leading-none">✦</span>
                Iluminação
                <span className="text-lime text-base leading-none">✦</span>
                De R$ 197 por R$ 0
                <span className="text-lime text-base leading-none">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* FOR WHOM */}
        <section className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-none text-center mb-14">
                Pra quem é isso?
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-5">
              <FadeIn>
                <div className="bg-lime/5 border border-lime/20 rounded-2xl p-8 h-full">
                  <h3 className="font-display font-black text-2xl text-lime mb-7">
                    É pra você se:
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Você vende ou quer vender cosméticos, suplementos ou qualquer produto físico",
                      "Quer parar de depender de fotógrafo pra cada variação de embalagem",
                      "Nunca abriu o Blender — ou abriu e fechou com medo",
                      "Quer adicionar 3D ao portfólio sem fazer curso de 6 meses",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted text-base leading-relaxed"
                      >
                        <Check
                          className="w-5 h-5 text-lime shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="bg-card border border-white/5 rounded-2xl p-8 h-full">
                  <h3 className="font-display font-black text-2xl text-muted mb-7">
                    Não é pra você se:
                  </h3>
                  <ul className="space-y-5">
                    {[
                      "Espera aprender Blender inteiro num mini-curso de 1 hora",
                      "Não tem interesse em produto físico — personagem, arquitetura e animação não estão aqui",
                      "Prefere continuar pagando fotógrafo em vez de aprender a fazer você mesmo",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted text-base leading-relaxed"
                      >
                        <X
                          className="w-5 h-5 text-dimmer shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* OBJECTION BREAKER */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-none mb-8">
                &ldquo;Nunca mexi no Blender. Vou conseguir?&rdquo;
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted text-xl leading-relaxed mb-6">
                Vai. O projeto foi desenhado pra quem nunca abriu o software.
                Você começa do cubo padrão do Blender — e vai modelando passo a
                passo, com o professor do lado. Não tem atalho pra memorizar,
                não tem comando secreto. Só o processo, uma vez, do começo ao
                fim.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="text-foreground text-xl font-semibold leading-relaxed">
                E na parte mais difícil — a composição — o bônus cuida: o addon
                nexIA automatiza a geração da cena com IA.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* OFFER */}
        <section id="pricing" className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-muted text-lg mb-2">
                  Sessão com fotógrafo: R$ 500–1.500.&nbsp;&nbsp;Template 3D no
                  marketplace: R$ 150–300.
                </p>
                <p className="text-foreground text-xl font-bold">
                  Aqui você aprende a fazer qualquer frasco, com qualquer
                  rótulo, infinitas vezes — por R$ 47.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-card card-border rounded-3xl p-8 sm:p-12 accent-glow">
                <div className="text-center mb-10">
                  <span className="inline-block bg-lime text-background text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    🔥 Oferta de Lançamento
                  </span>
                  <div className="font-display font-black text-8xl sm:text-9xl text-lime leading-none tabular-nums mb-2">
                    R$47
                  </div>
                  <p className="text-muted text-base">
                    ou 3x de{" "}
                    <span className="text-foreground font-bold">R$ 16,91</span>{" "}
                    no cartão
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Módulo completo — Packing Skills (6 módulos)",
                    "🎁 Bônus #1: Addon nexIA Image (De R$ 97, por R$ 0)",
                    "🎁 Bônus #2: Curso Blender Basics (De R$ 197, por R$ 0)",
                    "Arquivo do projeto .blend para referência",
                    "Acesso vitalício, sem mensalidade",
                    "Garantia total de 7 dias — sem perguntas",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted text-base">
                      <Check
                        className="w-5 h-5 text-lime shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <Btn href={CHECKOUT}>Sim, quero aprender agora →</Btn>
                  <p className="text-dimmer text-sm mt-4">
                    Pagamento seguro · Hotmart · Acesso imediato
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <Shield
                className="w-16 h-16 text-lime mx-auto mb-6"
                aria-hidden="true"
              />
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-none mb-6">
                Garantia Sem Erro — 7 dias.
              </h2>
              <p className="text-muted text-xl leading-relaxed">
                Você assiste ao curso, aplica o projeto, e se até o 7º dia
                achar que não valeu os R$ 47 — me manda um e-mail e devolvo
                tudo.{" "}
                <span className="text-foreground font-bold">
                  Sem formulário. Sem ligação. Sem perguntas.
                </span>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2 className="font-display font-black text-4xl sm:text-5xl leading-none text-center mb-12">
                Perguntas frequentes
              </h2>
            </FadeIn>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <details className="group bg-card card-border rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-base hover:text-lime transition-colors focus-visible:outline-none focus-visible:text-lime">
                      {faq.q}
                      <ChevronDown
                        className="w-5 h-5 text-muted shrink-0 group-open:rotate-180 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-alt py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 className="font-display font-black text-4xl sm:text-6xl leading-none mb-10 text-balance">
                Em menos de 1 hora você sai com imagem de produto profissional.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Btn href={CHECKOUT}>Quero aprender agora — R$ 47 →</Btn>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-dimmer text-sm mt-5">
                Pagamento seguro · Garantia 7 dias · Acesso vitalício
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <p className="text-muted text-base mt-14 max-w-xl mx-auto italic border-t border-white/5 pt-10">
                P.S. — A diferença entre o produto que para o feed e o que passa
                despercebido raramente é o produto em si. É a imagem. Por R$ 47
                você aprende a fazer a sua.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dimmer">
            <span className="font-display font-black text-base text-muted">
              IAPRO<span className="text-lime">.</span>BLEND
            </span>
            <span>doug Academy · contato@douglashelmer.com.br</span>
            <span>© 2025 Doug Academy. Todos os direitos reservados.</span>
          </div>
        </footer>
      </main>

    </>
  );
}

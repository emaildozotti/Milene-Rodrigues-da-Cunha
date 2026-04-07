import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="sobre" className="relative bg-bg-warm section-padding-lg overflow-hidden grain-overlay">
      {/* Blur ornament */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #730a1308 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display font-extrabold text-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-14">
            De 3% de chance a mãe de <span className="text-accent">três filhos</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Photo — order-1 on mobile (appears first visually) but order-2 on md */}
          <FadeIn delay={0.15} className="order-2 md:order-1 w-full md:w-5/12 flex-shrink-0">
            <div className="relative">
              {/* Rotated decorative frame */}
              <div
                className="absolute inset-0 border-2 border-accent rounded-sm"
                style={{ transform: 'rotate(-3deg)' }}
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl translate-y-3">
                {/* Placeholder fallback */}
                <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center gap-3">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <span className="text-primary/40 text-xs">Foto de Milene</span>
                </div>
                <img
                  src="/foto-milene-sobre.jpg"
                  alt="Milene Rodrigues, terapeuta"
                  className="w-full h-full object-cover relative z-10"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Text — order-1 on mobile (text first), order-2 on md */}
          <div className="order-1 md:order-2 w-full md:w-7/12">
            <FadeIn>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-5">
                Aos 19 anos, recebi um diagnóstico de falência ovariana. Três por cento de chance de engravidar. E ainda assim passei anos vivendo no modo guerreira: divórcio, sobrecarga financeira, sustentando tudo sozinha. Até que meu corpo decidiu me parar.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-5">
                O tromboembolismo foi o sinal mais violento de que eu estava me destruindo por dentro. Naquele momento, entendi que <span className="font-semibold text-text-main/90">meu corpo não era meu inimigo</span>. Ele estava gritando o que eu me recusava a ouvir. Mudei minha postura interna, realinhei meu terreno. E me tornei mãe de três filhos naturalmente.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-8">
                Hoje sou a mentora que eu mesma não tive. Uso o Método Triple Integrativo que construí a partir da minha própria dor: Análise Corporal, Constelação Sistêmica e Iridologia. Cada mulher que chega até mim carrega uma história que precisa ser <span className="text-primary">lida, interpretada e compreendida</span>, não apenas medicada.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <blockquote className="border-l-2 border-primary pl-5 mb-8">
                <p className="font-sub italic text-text-main/70 text-lg leading-relaxed">
                  Por isso estruturei um processo que olha para você inteira, não só para o sintoma.
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {['Analista Corporal', 'Consteladora Sistêmica', 'Iridologista', 'Terapeuta Integrativa'].map((cred) => (
                  <span
                    key={cred}
                    className="text-xs uppercase tracking-[0.12em] text-primary/70 border border-primary/20 rounded-sm px-3 py-1.5"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

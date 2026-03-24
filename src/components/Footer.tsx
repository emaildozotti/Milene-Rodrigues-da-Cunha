import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5534999160714?text=Oi%20Milene%2C%20vim%20pelo%20site.%20Gostaria%20de%20agendar%20minha%20conversa%20inicial%20para%20entender%20se%20o%20acompanhamento%20integrativo%20faz%20sentido%20para%20mim.'

export default function Footer() {
  return (
    <footer className="relative bg-dark text-off-white py-24 md:py-32 overflow-hidden">
      {/* Blur ornament */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5953A0D 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <p className="font-sans text-off-white/50 text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl mb-6 font-display font-extrabold">
            Voce carregou o mundo por tempo demais.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sub italic text-off-white/60 text-lg md:text-xl max-w-lg mb-12">
            Talvez seja hora de alguem olhar para o que voce carrega por dentro.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-accent text-dark font-sans font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:brightness-110 transition-all"
          >
            Quero minha conversa inicial
          </a>
        </FadeIn>

        {/* Signature */}
        <FadeIn delay={0.3} className="mt-20">
          <span className="font-sub text-2xl italic text-off-white/30">Milene Rodrigues</span>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-4">
          <p className="text-off-white/20 text-xs">
            Analista Corporal &middot; Consteladora Sistemica &middot; Iridologista
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}

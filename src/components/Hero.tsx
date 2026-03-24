import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5534999160714?text=Oi%20Milene%2C%20vim%20pelo%20site.%20Gostaria%20de%20agendar%20minha%20conversa%20inicial%20para%20entender%20se%20o%20acompanhamento%20integrativo%20faz%20sentido%20para%20mim.'

export default function Hero() {
  return (
    <>
      {/* Header — desktop only */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 py-4 bg-dark/90 backdrop-blur-md">
        <span className="font-sub text-off-white text-lg italic tracking-wide">Milene Rodrigues</span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-off-white/70 text-xs uppercase tracking-[0.15em] hover:text-accent transition-colors"
        >
          Agendar conversa
        </a>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        {/* Aurora */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, #730a1359 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'aurora-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, #B5953A3D 0%, transparent 70%)',
              filter: 'blur(70px)',
              animation: 'aurora-2 15s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, #F8F2EA28 0%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'aurora-3 18s ease-in-out infinite',
            }}
          />
        </div>

        {/* Split layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-24 md:pt-32 pb-16">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center">
            {/* Monograma MR — assinatura editorial */}
            <span
              className="font-sub italic text-off-white/[0.12] text-[4rem] leading-none select-none mb-4"
              aria-hidden="true"
            >
              MR
            </span>

            <FadeIn delay={0}>
              <p className="eyebrow-ultra text-accent mb-6">MODO SOBREVIVENCIA</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-display font-extrabold text-off-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Voce carrega o mundo.{' '}
                <span className="text-accent">Seu corpo cobra a conta.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.30}>
              <p className="font-sub text-off-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
                Existe um caminho para sair do esgotamento sem abrir mao de quem voce e.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <button
                onClick={() => document.getElementById('dores')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer bg-accent text-dark font-sans font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:brightness-110 transition-all cursor-pointer self-start"
              >
                Quero entender como funciona
              </button>
            </FadeIn>
          </div>

          {/* Right — Photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
              {/* Decorative frame */}
              <div
                className="absolute inset-0 border-2 border-accent rounded-sm"
                style={{ transform: 'rotate(-3deg)' }}
                aria-hidden="true"
              />
              <img
                src="/foto-milene-hero.jpg"
                alt="Milene Rodrigues"
                className="relative w-full h-full object-cover object-top rounded-sm shadow-2xl ring-1 ring-white/10"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0 rounded-sm"
                style={{ background: 'linear-gradient(to top, #730a13 0%, transparent 40%)' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-off-white/40">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <path d="M8 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
    </>
  )
}

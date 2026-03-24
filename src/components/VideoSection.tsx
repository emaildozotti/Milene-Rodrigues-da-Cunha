import FadeIn from './FadeIn'

export default function VideoSection() {
  return (
    <section id="video" className="relative bg-bg-light section-padding overflow-hidden">
      <h2 className="sr-only">Vídeo de apresentação</h2>
      {/* Blur ornament */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #730a1310 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10 flex flex-col items-center">
        <FadeIn>
          <div className="max-w-xl text-center mb-12">
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed">
              Aos 19 anos, ouvi que tinha 3% de chance de ser mae.
            </p>
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed mt-2">
              Passei anos no modo guerreira, carregando tudo sozinha.
            </p>
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed mt-2">
              Ate meu corpo me parar com um tromboembolismo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* 9:16 vertical container */}
          <div
            className="relative w-full rounded-sm overflow-hidden ring-1 ring-primary shadow-2xl"
            style={{ maxWidth: '300px', aspectRatio: '9/16' }}
          >
            <iframe
              src="https://www.youtube.com/embed/nAI0W__QEmw"
              title="Video de Milene Rodrigues"
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.30} className="mt-10">
          <p className="font-sub italic text-text-main/70 text-lg md:text-xl text-center max-w-lg">
            O que descobri nesse caminho e exatamente o que compartilho com voce agora.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

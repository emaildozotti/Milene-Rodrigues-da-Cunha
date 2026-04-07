import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const dores = [
  {
    num: '01',
    texto: 'Você acorda cansada, mesmo depois de dormir. Seu corpo não recarrega mais.',
  },
  {
    num: '02',
    texto: 'Já foi em cinco, dez médicos. Ninguém descobre o que você tem de verdade.',
  },
  {
    num: '03',
    texto: 'Cuida de todo mundo. No final do dia, não sobra nada pra você.',
  },
  {
    num: '04',
    texto: 'Sabe que algo está errado por dentro, mas tem medo de parar pra olhar.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function PainPoints() {
  return (
    <section id="dores" className="relative bg-dark text-off-white section-padding overflow-hidden">
      <h2 className="sr-only">Identificação de dores</h2>
      {/* Blur ornament */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5953A12 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <p className="font-sub italic text-off-white/70 text-lg md:text-xl mb-12 max-w-2xl">
            Conheço essas mulheres. Fui essa mulher durante anos.
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dores.map((dor) => (
            <motion.div
              key={dor.num}
              variants={item}
              className="relative p-10 rounded-sm bg-white/[0.03] border border-off-white/[0.06] hover:border-accent/30 transition-colors"
            >
              <span className="absolute top-4 right-6 font-sub text-accent/30 text-6xl leading-none select-none" aria-hidden="true">
                {dor.num}
              </span>
              <p className="font-sans text-off-white/90 text-base leading-relaxed relative z-10">
                {dor.texto}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="mt-14">
          <p className="font-sub text-accent text-xl md:text-2xl italic text-center max-w-xl mx-auto">
            Essa exaustão tem <span className="font-semibold">raiz</span>. E ela não está onde você procurou até agora.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

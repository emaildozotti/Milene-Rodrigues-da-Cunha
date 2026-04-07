import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const passos = [
  {
    num: '1',
    titulo: 'Conversa inicial',
    texto:
      'Na nossa primeira conversa, escuto sua história sem pressa. Entendo o que você já tentou, o que funcionou, o que não funcionou. E fazemos juntas uma primeira leitura do que pode estar na raiz. Sem compromisso, sem pressão.',
  },
  {
    num: '2',
    titulo: 'Leitura Integrada',
    texto:
      'Nas sessões seguintes, aplico a Triple: compreendo seu corpo, investigo dinâmicas sistêmicas e analiso seu terreno biológico pela Iridologia, adequando o protocolo à sua necessidade conforme as avaliações. Cada camada revela o que a outra não mostra sozinha. Você começa a entender o que sempre esteve ali, mas ninguém tinha olhado.',
  },
  {
    num: '3',
    titulo: 'Realinhamento e regeneração',
    texto:
      'Com a raiz identificada, trabalhamos o realinhamento. Isso significa mudanças concretas na forma como você se relaciona com seu corpo, sua história familiar e sua biologia. O resultado não é mágico: é o terreno se regenerando porque finalmente paramos de tratar só a superfície.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-bg-light section-padding overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom right, #FAF6F0, #f2f0ef)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display font-extrabold text-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
            Seu processo começa <span className="text-primary">aqui</span>
          </h2>
        </FadeIn>

        {/* 3 Steps — timeline vertical */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-8 w-px bg-primary/15" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {passos.map((passo) => (
              <motion.div key={passo.num} variants={item} className="relative flex gap-6 md:gap-10">
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display font-bold text-off-white text-lg md:text-xl">{passo.num}</span>
                </div>

                <div className="pt-1 md:pt-3">
                  <h3 className="font-display font-bold text-heading text-xl md:text-2xl mb-3">
                    {passo.titulo}
                  </h3>
                  <p className="font-sans text-text-main/80 text-base leading-relaxed max-w-2xl">
                    {passo.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remove ansiedade */}
        <FadeIn className="mt-14">
          <div className="max-w-2xl ml-0 md:ml-[6.5rem]">
            <p className="font-sans text-text-main/65 text-sm leading-relaxed italic">
              Se você está insegura sobre dar esse passo, saiba que na conversa inicial não existe compromisso. É uma escuta. Você decide depois se quer continuar.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

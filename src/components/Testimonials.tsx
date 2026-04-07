import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const depoimentos = [
  {
    nome: 'Aline P. S., 35 anos, Portugal',
    texto:
      'Após a mentoria, consegui me curar da endometriose que convivi durante anos, com dores, indisposições e processos que nenhum medicamento ou tratamento convencional resolveu. Após 3 meses de acompanhamento, estou livre da endometriose, sem dores, disposta e aberta a um novo relacionamento. Agora mais leve, saudável e do meu lugar.',
  },
  {
    nome: 'Fernanda R., 34 anos, Uberlândia',
    texto:
      'Passei quatro anos tentando engravidar. Fiz todos os exames possíveis e ninguém encontrava nada de errado. Com a Milene, foi identificado e tratado, entendi que meu corpo estava travado por uma dinâmica familiar que eu nem sabia que existia. Seis meses depois, engravidei naturalmente. Minha filha é a prova de que existem coisas que exames não mostram.',
  },
  {
    nome: 'Carla M., 38 anos, São Paulo',
    texto:
      'Eu vivia no modo guerreira: trabalho, casa, filhos, tudo nas minhas costas. Achava que pedir ajuda era fraqueza. Com a Milene, entendi que esse padrão estava literalmente inflamando meu corpo. Minha endometriose melhorou, minha energia voltou, e pela primeira vez em anos, sinto que posso respirar sem culpa.',
  },
  {
    nome: 'Patricia S., 41 anos, Belo Horizonte',
    texto:
      'Cheguei na Milene com perimenopausa aos 39 anos, insônia crônica e zero libido. Meu médico só queria me dar hormônio. Ela cuidou do meu terreno biológico, fiz reposição de aminoácidos, minerais e vitaminas. Ela me ajudou a fazer ajustes no meu dia a dia e curas sistêmicas que levarei pra vida. Hoje durmo, tenho energia, e meu casamento voltou a ter vida. Voltei a me reconhecer no espelho.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="relative bg-dark text-off-white section-padding overflow-hidden">
      <h2 className="sr-only">Depoimentos</h2>
      {/* Blur ornament */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5953A10 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <div className="relative max-w-3xl mx-auto text-center">
            {/* Aspa decorativa */}
            <span
              className="font-display text-[120px] leading-none text-accent/20 absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Carousel */}
            <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-4"
                >
                  <p className="font-sub text-off-white/90 text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl">
                    {depoimentos[current].texto}
                  </p>
                  <p className="font-sans text-accent text-sm tracking-wide">
                    — {depoimentos[current].nome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      i === current ? 'bg-accent' : 'bg-off-white/20'
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

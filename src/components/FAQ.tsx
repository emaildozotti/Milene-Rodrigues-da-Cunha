import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const faqs = [
  {
    pergunta: 'Ja tentei terapia/tratamento antes e nada funcionou',
    resposta:
      'Sei que voce ja investiu tempo, dinheiro e esperanca em solucoes que nao chegaram na raiz. O que faco de diferente e simples: nao trato apenas o sintoma. Leio seu corpo, seu sistema familiar e seu terreno biologico ao mesmo tempo. Quando as tres camadas se encontram, o que estava escondido aparece.',
  },
  {
    pergunta: 'Funciona online?',
    resposta:
      'Sim, funciona. A Analise Corporal e a Constelacao Sistemica funcionam perfeitamente por video. A Iridologia requer uma foto de alta resolucao da sua iris, que voce envia antes da sessao. Atendo mulheres de todo o Brasil dessa forma, com a mesma profundidade do presencial.',
  },
  {
    pergunta: 'Qual e o investimento?',
    resposta:
      'Sei que e uma decisao financeira real. Sei tambem que viver com dor cronica, exaustao e um corpo que nao responde tem um custo que voce ja esta pagando: no casamento, na energia, na vontade de viver. O valor do acompanhamento e definido na nossa conversa inicial, porque cada processo tem profundidade diferente. Nao trabalho com pacote padrao.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'O processo terapeutico costuma durar entre 3 e 6 meses, dependendo da complexidade do que encontramos na raiz. Algumas mulheres sentem mudancas significativas ja no primeiro mes. Mas resultado real, que se sustenta, pede tempo e comprometimento.',
  },
  {
    pergunta: 'Constelacao Sistemica e misticismo ou tem base tecnica?',
    resposta:
      'Nao e misticismo. Constelacao Sistemica trabalha com padroes observaveis de din\u00e2micas familiares. Nao peco que voce acredite em nada alem do que pode perceber. Nao ha transe, incorporacao ou ritual. E uma ferramenta de leitura de padroes que, quando integrada com a Analise Corporal e a Iridologia, revela o que esta travando seu sistema.',
  },
  {
    pergunta: 'E se o problema for da outra pessoa (marido, mae, familia)?',
    resposta:
      'O trabalho comeca por voce. Nao porque a culpa e sua, mas porque voce e o ponto de entrada do sistema. Quando voce se reposiciona, o sistema ao redor responde. Nao precisa convencer ninguem. Precisa se mover primeiro.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="relative bg-bg-warm section-padding overflow-hidden grain-overlay">
      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display font-extrabold text-heading text-3xl md:text-4xl leading-tight mb-14">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
        </FadeIn>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border-b border-text-main/[0.08]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <span className="font-sans font-medium text-text-main text-base md:text-lg pr-4 group-hover:text-primary transition-colors">
                    {faq.pergunta}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 text-primary/50 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-text-main/70 text-sm md:text-base leading-relaxed pb-6 pr-8">
                        {faq.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

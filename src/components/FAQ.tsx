import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const faqs = [
  {
    pergunta: 'Já tentei terapia/tratamento antes e nada funcionou',
    resposta:
      'Sei que você já investiu tempo, dinheiro e esperança em soluções que não chegaram na raiz. O que faço de diferente é simples: não trato apenas o sintoma. Compreendo e integro seu corpo, seu sistema familiar e seu terreno biológico ao mesmo tempo. Quando as três camadas se encontram, o que estava escondido aparece.',
  },
  {
    pergunta: 'Funciona online?',
    resposta:
      'Sim, funciona. Para cada etapa você será orientada em como será a reunião e cada etapa do processo. Atendo mulheres desde 2020, online, do Brasil e do mundo, com a mesma profundidade do presencial.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta:
      'Sei que é uma decisão financeira real. Sei também que viver com dor crônica, exaustão e um corpo que não responde tem um custo que você já está pagando: no casamento, na energia, na vontade de viver. O valor do acompanhamento é definido na nossa conversa inicial, porque cada processo tem profundidade diferente. Não trabalho com pacote padrão.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'Cada acompanhamento tem as suas particularidades, mas no primeiro mês você já terá mudanças significativas. Entretanto, existem processos que demandam um pouco mais de tempo, pois o meu intuito é que seja resultado real e que se sustente a longo prazo.',
  },
  {
    pergunta: 'Constelação Sistêmica é misticismo ou tem base técnica?',
    resposta:
      'Não é misticismo. A Constelação Sistêmica é uma abordagem terapêutica desenvolvida por Bert Hellinger, baseada na observação de padrões familiares e comportamentais. Hoje, esses padrões também são estudados pela Epigenética, que mostra como experiências e emoções podem impactar gerações. Na prática, a Constelação ajuda a identificar e reorganizar esses padrões, trazendo clareza e possibilitando mudanças reais, sem nenhum viés ou vínculo religioso.',
  },
  {
    pergunta: 'E se o problema for da outra pessoa (marido, mãe, família)?',
    resposta:
      'O trabalho começa por você. Não porque a culpa é sua, mas porque você é o ponto de entrada do sistema. Quando você se reposiciona, as pessoas e o sistema ao redor respondem. Não precisa convencer ninguém. Precisa se mover primeiro. Entretanto, se o interesse for do cônjuge, é possível agendar atendimento para o casal. Principalmente nos casos de casais que estão em busca do positivo, ambos terem um terreno biológico restaurado e questões sistêmicas e emocionais resolvidas aumentará não só as chances de um positivo como também uma genética mais efetiva e nutrida para gerar um bebê.',
  },
  {
    pergunta: 'Não posso tomar hormônios, tem alguma contraindicação no tratamento?',
    resposta:
      'Todo o método é realizado de forma natural e com infocêuticos que carregam em suas fórmulas oligoelementos que, além de naturais, cuidam direto das células para assim alcançar os tecidos e órgãos. Além de não ter nenhuma contraindicação e/ou efeitos colaterais.',
  },
  {
    pergunta: 'Já fiz menopausa, o método é pra mim?',
    resposta:
      'Sim, principalmente após os 35 anos a mulher passa a ter queda da produção de hormônios, queda na absorção de vitaminas e minerais, o que leva a atenuar os sintomas da perimenopausa e menopausa. Então corrigir e complementar o que falta no seu terreno biológico e no seu corpo te proporcionarão um envelhecer com mais tranquilidade e leveza.',
  },
  {
    pergunta: 'Não tenho útero ou já fiz laqueadura, com o método posso engravidar?',
    resposta:
      'O Método Triple Integrativo tem como objetivo avaliar a raiz de sintomas físicos e emocionais, possibilitando assim auxiliar, cuidar e tratar da queixa ao que se identifica. Mas quando já se realizou procedimentos cirúrgicos impeditivos e/ou contraceptivos, a possibilidade de engravidar deve ser verificada junto aos profissionais competentes da área da medicina tradicional.',
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

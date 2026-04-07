import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5534999160714?text=Oi%20Milene%2C%20vim%20pelo%20site.%20Gostaria%20de%20agendar%20minha%20conversa%20inicial%20para%20entender%20se%20o%20acompanhamento%20integrativo%20faz%20sentido%20para%20mim.'

const pilares = [
  {
    num: '01',
    titulo: 'Análise Corporal',
    texto:
      'Seu corpo gravou tudo o que você viveu. Cada tensão, cada trauma, cada adaptação. Na Análise Corporal, leio, compreendo esses registros para entender o que moldou seus recursos e seus limites hoje.',
  },
  {
    num: '02',
    titulo: 'Constelação Sistêmica',
    texto:
      'Muitas vezes, o desequilíbrio hormonal ou a infertilidade carregam padrões da sua família que você nem sabe que existem. Identifico ordens de ajuda, exclusões e dinâmicas que estão travando seu ciclo.',
  },
  {
    num: '03',
    titulo: 'Iridologia',
    texto:
      'Seu terreno biológico é o solo onde sua saúde nasce ou morre. Pela leitura da íris, identifico a raiz dos desequilíbrios, carências nutricionais e repetições de sintomas. Antes mesmo que se tornem doenças. Possibilitando compreender o que os diagnósticos sem causa aparente e exames não mostram.',
    extra:
      'Não é adivinhação. É leitura técnica e científica do terreno que sustenta (ou sabota) cada função do seu corpo. Quando o terreno está inflamado, em desequilíbrio, nenhum tratamento de superfície vai funcionar. Primeiro, preparamos o solo.',
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

export default function Method() {
  return (
    <section id="metodo" className="relative bg-dark text-off-white section-padding-lg overflow-hidden">
      {/* Blur ornament */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5953A10 0%, transparent 70%)', filter: 'blur(90px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display font-extrabold text-off-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Método Triple Integrativo: Corpo, <span className="text-accent">Sistema</span> e Terreno
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-off-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
            Eu não trato sintomas isolados. Leio, compreendo e integro o que seu corpo, sua história familiar e seu terreno biológico estão dizendo ao mesmo tempo. Porque a saúde feminina só se regenera quando essas três camadas se encontram.
          </p>
        </FadeIn>

        <motion.div
          className="space-y-12 md:space-y-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pilares.map((pilar) => (
            <motion.div key={pilar.num} variants={item} className="relative">
              {/* Numero decorativo grande */}
              <span
                className="absolute -top-4 -left-2 md:-left-6 font-sub text-accent/20 text-8xl md:text-9xl leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {pilar.num}
              </span>

              <div className="relative z-10 pl-0 md:pl-16">
                <h3 className="font-display font-bold text-off-white text-xl md:text-2xl mb-4">
                  {pilar.titulo}
                </h3>
                <p className="font-sans text-off-white/80 text-base leading-relaxed max-w-2xl">
                  {pilar.texto}
                </p>
                {pilar.extra && (
                  <p className="font-sans text-off-white/65 text-base leading-relaxed max-w-2xl mt-4">
                    {pilar.extra}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA — substituiu o "Não prometo" */}
        <FadeIn className="mt-16">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-accent text-dark font-sans font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:brightness-110 transition-all inline-flex"
          >
            Quero minha conversa inicial
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <p className="font-sub italic text-accent text-lg md:text-xl">
            Esse método nasceu da minha própria travessia. Deixa eu te contar de onde vim.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

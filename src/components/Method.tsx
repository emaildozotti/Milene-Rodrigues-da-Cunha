import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const pilares = [
  {
    num: '01',
    titulo: 'Analise Corporal',
    texto:
      'Seu corpo gravou tudo o que voce viveu. Cada tensao, cada trauma, cada adaptacao. Na Analise Corporal, leio esses registros para entender o que moldou seus recursos e seus limites hoje.',
  },
  {
    num: '02',
    titulo: 'Constelacao Sistemica',
    texto:
      'Muitas vezes, o desequilibrio hormonal ou a infertilidade carregam padroes da sua familia que voce nem sabe que existem. Identifico ordens de ajuda, exclusoes e din\u00e2micas que estao travando seu ciclo.',
  },
  {
    num: '03',
    titulo: 'Iridologia (Terreno Biologico)',
    texto:
      'Seu terreno biologico e o solo onde sua saude nasce ou morre. Pela leitura da iris, identifico inflamacoes, carencias nutricionais e desequilibrios antes que se tornem doenca. E aqui que entendo o que os exames laboratoriais nao mostram.',
    extra:
      'Nao e adivinhacao. E leitura tecnica do terreno que sustenta (ou sabota) cada funcao do seu corpo. Quando o terreno esta inflamado, nenhum tratamento de superficie vai funcionar. Primeiro, preparamos o solo.',
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
            Tripe Integrativo: Corpo, <span className="text-accent">Sistema</span> e Terreno
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-off-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
            Eu nao trato sintomas isolados. Leio o que seu corpo, sua historia familiar e seu terreno biologico estao dizendo ao mesmo tempo. Porque a saude feminina so se regenera quando essas tres camadas se encontram.
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

        {/* Nao prometo */}
        <FadeIn className="mt-16">
          <div className="border-l-2 border-accent pl-6 max-w-2xl">
            <p className="font-sans text-off-white/70 text-sm leading-relaxed italic">
              Nao prometo milagres. Nao trabalho com corpos onde nao ha viabilidade biologica. Exijo comprometimento real com o processo, porque resultado de verdade nao vem sem isso.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <p className="font-sub italic text-accent text-lg md:text-xl">
            Esse metodo nasceu da minha propria travessia. Deixa eu te contar de onde vim.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

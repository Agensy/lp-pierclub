"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  Check,
  Anchor,
  Ship,
  Utensils,
  PocketIcon as Pool,
  Hotel,
  ShoppingBag,
  Waves,
  Users,
  Award,
  Clock,
  ShieldCheck,
  Zap,
  Lock,
  Compass,
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Subida e descida de barcos e jetskis",
    icon: <Ship className="h-5 w-5 text-[#D9C38E]" />,
  },
  {
    title: "Estocagem segura e coberta",
    icon: <Anchor className="h-5 w-5 text-[#D9C38E]" />,
  },
  {
    title: "Restaurante à beira do Canal",
    icon: <Utensils className="h-5 w-5 text-[#D9C38E]" />,
  },
  {
    title: "Piscina e área de lazer",
    icon: <Pool className="h-5 w-5 text-[#D9C38E]" />,
  },
  {
    title: "Passeios, eventos e hospedagem",
    icon: <Hotel className="h-5 w-5 text-[#D9C38E]" />,
  },
  {
    title: "Venda de barcos, seguros e peças",
    icon: <ShoppingBag className="h-5 w-5 text-[#D9C38E]" />,
  },
]

const benefits = [
  {
    title: "Prioridade na escolha",
    description:
      "Seja um dos primeiros a escolher sua vaga e localização preferida na marina, garantindo as melhores opções disponíveis.",
    highlight: "Vagas limitadas e alta demanda",
    icon: <ShieldCheck className="h-8 w-8 text-[#D5C494]" />,
  },
  {
    title: "Condições de pré-lançamento",
    description:
      "Aproveite valores e condições especiais disponíveis apenas durante o período de pré-lançamento, com economia significativa.",
    highlight: "Economia de até 30% no investimento inicial",
    icon: <Clock className="h-8 w-8 text-[#D5C494]" />,
  },
  {
    title: "Status de membro fundador",
    description:
      "Torne-se um membro fundador do Pier Club e desfrute de privilégios exclusivos e reconhecimento permanente na comunidade.",
    highlight: "Benefícios vitalícios exclusivos",
    icon: <Award className="h-8 w-8 text-[#D5C494]" />,
  },
  {
    title: "Acesso antecipado",
    description:
      "Seja um dos primeiros a desfrutar da infraestrutura e serviços do Pier Club, com acesso exclusivo antes da inauguração oficial.",
    highlight: "Experiência VIP desde o primeiro momento",
    icon: <Zap className="h-8 w-8 text-[#D5C494]" />,
  },
]

export function MarinaServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background - Simplified version */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#051525] z-0"></div>

        {/* Simplified image with reduced effects */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/yacht-club-celebration.png"
            alt="Barco e jetski"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>

        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051525]/90 to-[#0A2A3F]/70 z-0"></div>

        {/* Reduced decorative elements - just two simple gradients */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#D5C494]/10 blur-[80px] z-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#D5C494]/10 blur-[80px] z-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título principal com destaque visual aprimorado */}
          <ScrollReveal>
            <div className="relative">
              <Waves className="h-16 w-16 text-[#D9C38E]/30 absolute -top-20 -left-10 opacity-70" />

              {/* NOVO: Elemento decorativo para destacar o título */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[150%] h-[300px] bg-[#D5C494]/5 blur-[80px] rounded-full z-0"></div>

              <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D9C38E] mb-6 leading-tight text-center drop-shadow-lg relative z-10">
                  DEIXE O{" "}
                  <span className="relative text-white">
                    SEU BARCO OU JETSKI
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#D5C494]/70"></span>
                  </span>{" "}
                  <span className="text-white">NO LUGAR</span> QUE VAI ALÉM DA MARINA
                </h2>

                {/* NOVO: Linha decorativa sob o título */}
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-[#D5C494]/0 via-[#D5C494]/60 to-[#D5C494]/0 mb-8"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#0A1A2F]/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Efeito de vidro padronizado */}
                    <div className="absolute inset-0 bg-white/5"></div>
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20"></div>
                    <div className="absolute -inset-[1px] bg-white/5 blur-sm rounded-lg opacity-50"></div>

                    <Check className="h-4 w-4 text-[#D9C38E] relative z-10" />
                    <span className="text-white text-sm font-medium relative z-10">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* NOVO: Divisor visual com efeito de onda dourada */}
          <div className="relative h-24 my-8">
            <div className="absolute inset-x-0 h-[1px] top-1/2 bg-gradient-to-r from-transparent via-[#D5C494]/40 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#051525] border-2 border-[#D5C494]/30 flex items-center justify-center z-10">
              <Compass className="h-8 w-8 text-[#D5C494]/80" />
            </div>
          </div>

          <ScrollReveal delay={200}>
            <div className="bg-[#0A1A2F]/70 backdrop-blur-lg p-10 rounded-2xl mt-12 shadow-2xl border border-[#D5C494]/20 relative overflow-hidden z-20">
              {/* NOVO: Efeito de destaque com gradiente dourado */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D5C494]/15 via-[#D5C494]/5 to-transparent rounded-2xl"></div>
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D5C494]/0 via-[#D5C494] to-[#D5C494]/0"></div>

              {/* Título da seção com design refinado */}
              <div className="relative z-10 mb-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#0A1A2F] border-4 border-[#D5C494] flex items-center justify-center mb-4 shadow-lg">
                  <Anchor className="h-8 w-8 text-[#D5C494]" />
                </div>
                <h3 className="text-3xl font-light text-white tracking-wider uppercase text-center">
                  <span className="font-bold">Mensalidades</span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-[#D5C494]/0 via-[#D5C494] to-[#D5C494]/0 mt-3"></div>
              </div>

              {/* Cards de preços com layout refinado */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Card Barco - Simplified */}
                <div className="bg-[#0A1A2F]/80 rounded-xl overflow-hidden border border-white/10 shadow-lg h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col items-center">
                    <div className="flex justify-center mb-6">
                      <Ship className="h-12 w-12 text-[#D5C494] mb-4" />
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-4">Barcos</h4>
                    <div className="flex justify-center items-baseline mt-auto mb-4">
                      <span className="text-5xl font-extrabold text-[#D5C494]">80</span>
                      <span className="text-xl text-white ml-1">/pé</span>
                    </div>
                    <p className="text-white/70 text-center text-sm">Valor mensal por pé</p>
                  </div>
                  <div className="bg-[#D5C494]/10 p-4 border-t border-white/10">
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Acesso prioritário à marina</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Monitoramento constante</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Manutenção preventiva</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card Jetski */}
                <div className="bg-[#0A1A2F]/80 rounded-xl overflow-hidden border border-white/10 shadow-lg h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col items-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative h-16 w-16">
                        <Image
                          src="/jetski-icon-gold.png"
                          alt="Jetski"
                          width={64}
                          height={64}
                          className="text-[#D5C494]"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-4">Jetskis</h4>
                    <div className="flex justify-center items-baseline mt-auto mb-4">
                      <span className="text-5xl font-extrabold text-[#D5C494]">650</span>
                      <span className="text-xl text-white ml-1">/mês</span>
                    </div>
                    <p className="text-white/70 text-center text-sm">Valor fixo mensal por jetski</p>
                  </div>
                  <div className="bg-[#D5C494]/20 p-4 border-t border-[#D5C494]/30">
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Acesso prioritário à marina</span>
                      </li>
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Área exclusiva para jetskis</span>
                      </li>
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Limpeza e manutenção</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card Pernoite */}
                <div className="bg-[#0A1A2F]/80 rounded-xl overflow-hidden border border-white/10 shadow-lg h-full flex flex-col">
                  <div className="p-6 flex-grow flex flex-col items-center">
                    <div className="flex justify-center mb-6">
                      <Hotel className="h-12 w-12 text-[#D5C494]" />
                    </div>
                    <h4 className="text-xl font-semibold text-white text-center mb-4">Pernoite</h4>
                    <div className="flex justify-center items-baseline mt-auto mb-4">
                      <span className="text-5xl font-extrabold text-[#D5C494]">300</span>
                      <span className="text-xl text-white ml-1">/dia</span>
                    </div>
                    <p className="text-white/70 text-center text-sm">Valor diário para pernoite</p>
                  </div>
                  <div className="bg-[#D5C494]/20 p-4 border-t border-[#D5C494]/30">
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Suítes&Pier para pernoite</span>
                      </li>
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Serviço de concierge</span>
                      </li>
                      <li className="flex items-center text-white/90 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Acesso à infraestrutura</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* NOVA SEÇÃO: Benefícios para quem se interessar agora */}
              <div className="mt-16 relative z-10">
                <div className="flex flex-col items-center mb-10">
                  <div className="w-20 h-20 rounded-full bg-[#0A1A2F] border-4 border-[#D5C494] flex items-center justify-center mb-4 shadow-lg">
                    <Award className="h-8 w-8 text-[#D5C494]" />
                  </div>
                  <h3 className="text-3xl font-light text-white tracking-wider uppercase text-center">
                    <span className="font-bold">Benefícios para quem se interessar agora</span>
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#D5C494]/0 via-[#D5C494] to-[#D5C494]/0 mt-3"></div>
                  <p className="text-white/80 text-center max-w-2xl mt-4">
                    Durante o pré-lançamento, oferecemos condições especiais e vantagens exclusivas para os primeiros
                    membros.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                      <div className="bg-[#0A1A2F]/60 backdrop-blur-md rounded-xl p-6 border border-white/10 relative overflow-hidden group hover:border-[#D5C494]/30 transition-all duration-300 h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D5C494]/5 via-transparent to-transparent"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            {benefit.icon}
                            <h4 className="text-xl font-semibold text-white">{benefit.title}</h4>
                          </div>
                          <p className="text-white/70 mb-4">{benefit.description}</p>
                          <div className="border-t border-white/10 pt-4 mt-auto">
                            <p className="text-[#D5C494] font-medium">{benefit.highlight}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Informações adicionais */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Acesso Exclusivo */}
                <div className="bg-[#0A1A2F]/60 backdrop-blur-md rounded-xl p-6 border border-white/10 relative overflow-hidden group hover:border-[#D5C494]/30 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D5C494]/5 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <ShoppingBag className="h-6 w-6 text-[#D5C494]" />
                      <h4 className="text-xl font-semibold text-white">Acesso Exclusivo</h4>
                    </div>
                    <p className="text-white/70 mb-6">
                      Marketplace, leilões, vantagens exclusivas. Beneficie-se de ofertas especiais e serviços premium.
                    </p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Marketplace náutico exclusivo</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Leilões de itens premium</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Descontos em serviços parceiros</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Comunidade Náutica */}
                <div className="bg-[#0A1A2F]/60 backdrop-blur-md rounded-xl p-6 border border-white/10 relative overflow-hidden group hover:border-[#D5C494]/30 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D5C494]/5 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-[#D5C494]" />
                      <h4 className="text-xl font-semibold text-white">Comunidade Náutica</h4>
                    </div>
                    <p className="text-white/70 mb-6">
                      Faça parte de uma comunidade exclusiva de entusiastas náuticos, com eventos, encontros e
                      experiências compartilhadas.
                    </p>
                    <ul className="space-y-3 mt-auto">
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Eventos exclusivos</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Networking qualificado</span>
                      </li>
                      <li className="flex items-center text-white/80 text-sm">
                        <Check className="h-4 w-4 text-[#D5C494] mr-2 flex-shrink-0" />
                        <span>Compartilhamento de experiências</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botão de acesso prioritário */}
              <ScrollReveal delay={400}>
                <div className="flex justify-center mt-12">
                  <a
                    href="#contato"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="relative btn-padrao bg-[#D5C494] hover:bg-[#D5C494]/90 text-[#0A1A2F] text-xl px-12 py-7 shadow-lg hover:shadow-xl group overflow-hidden rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#D5C494]/50 cursor-pointer"
                    aria-label="Ir para o formulário de contato"
                  >
                    {/* Efeito de brilho/glow */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D5C494]/0 via-white/30 to-[#D5C494]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

                    {/* Efeito de borda pulsante */}
                    <span className="absolute inset-0 rounded-full border-2 border-[#D5C494] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>

                    <span className="relative z-10 font-semibold text-xl flex items-center gap-2">
                      Garantir meu acesso prioritário agora
                      <Lock className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
                    </span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { ShieldCheck, Clock, Award, Zap, Lock } from "lucide-react"

export function PriorityBenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Por que garantir seu acesso prioritário?"
          highlightWord="prioritário"
          titleSize="large"
          breakLine={true}
          subtitle="Ao garantir seu acesso prioritário, você assegura vantagens exclusivas que farão toda a diferença na sua experiência náutica"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <ScrollReveal direction="left">
            <div className="bg-[#0A1A2F] text-white rounded-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-8 w-8 text-[#D9C38E]" />
                <h3 className="text-xl font-semibold">Prioridade na escolha</h3>
              </div>
              <p className="text-white/80 mb-4">
                Seja um dos primeiros a escolher sua vaga e localização preferida na marina, garantindo as melhores
                opções disponíveis.
              </p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-[#D9C38E] font-medium">Vagas limitadas e alta demanda</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="bg-[#0A1A2F] text-white rounded-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-[#D9C38E]" />
                <h3 className="text-xl font-semibold">Condições de pré-lançamento</h3>
              </div>
              <p className="text-white/80 mb-4">
                Aproveite valores e condições especiais disponíveis apenas durante o período de pré-lançamento, com
                economia significativa.
              </p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-[#D9C38E] font-medium">Economia de até 30% no investimento inicial</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="bg-[#0A1A2F] text-white rounded-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-[#D9C38E]" />
                <h3 className="text-xl font-semibold">Status de membro fundador</h3>
              </div>
              <p className="text-white/80 mb-4">
                Torne-se um membro fundador do Pier Club e desfrute de privilégios exclusivos e reconhecimento
                permanente na comunidade.
              </p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-[#D9C38E] font-medium">Benefícios vitalícios exclusivos</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="bg-[#0A1A2F] text-white rounded-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-[#D9C38E]" />
                <h3 className="text-xl font-semibold">Acesso antecipado</h3>
              </div>
              <p className="text-white/80 mb-4">
                Seja um dos primeiros a desfrutar da infraestrutura e serviços do Pier Club, com acesso exclusivo antes
                da inauguração oficial.
              </p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="text-[#D9C38E] font-medium">Experiência VIP desde o primeiro momento</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="flex justify-center mt-12">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-padrao btn-gold"
              aria-label="Ir para o formulário de contato"
            >
              <span>Garantir meu acesso prioritário agora</span>
              <Lock className="h-5 w-5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

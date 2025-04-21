"use client"

import { Check, Anchor } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

const features = [
  "Barco sempre limpo, abastecido e pronto",
  "Tripulação sob demanda e concierge técnico via WhatsApp",
  "Painel digital com status e histórico da embarcação",
  "Suítes confortáveis para pernoite",
  "Gastronomia refinada à beira-rio",
  "Espaço com vista para o canal",
  "Eventos, encontros e experiências náuticas",
  "Marketplace, leilões e mentorias entre membros",
]

export function FeaturesSection() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="O que você encontra no Pier Club"
          subtitle="Serviços exclusivos pensados para proporcionar a melhor experiência náutica"
          highlightWord="encontra"
          breakLine={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="up">
              <div className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-[#D9C38E]/10">
                <div className="bg-[#D9C38E]/10 rounded-full p-1 mt-0.5">
                  <Check className="h-5 w-5 text-[#D9C38E]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#0A1A2F]">{feature}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="text-center mt-12 text-base md:text-lg text-gray-700">
            Sem improviso. Sem ruído. Só o que importa — bem feito.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="flex justify-center mt-8">
            <a
              href="#contato"
              className="relative btn-padrao bg-[#D9C38E] hover:bg-[#D9C38E]/90 text-[#0A1A2F] text-xl px-12 py-7 shadow-lg hover:shadow-xl group overflow-hidden rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#D9C38E]/50"
              aria-label="Ir para o formulário de contato"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {/* Efeito de brilho/glow */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D9C38E]/0 via-white/30 to-[#D9C38E]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

              {/* Efeito de borda pulsante */}
              <span className="absolute inset-0 rounded-full border-2 border-[#D9C38E] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>

              <span className="relative z-10 font-semibold text-xl flex items-center gap-2">
                Quero explorar essa proposta
                <Anchor className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

"use client"
import { Anchor, Users, Calendar, Compass, ShieldCheck } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

const communityFeatures = [
  {
    title: "Um espaço de troca real entre proprietários",
    description: "Compartilhe experiências e conhecimentos com outros entusiastas náuticos.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Mentorias e experiências compartilhadas",
    description: "Aprenda com especialistas e amplie seu conhecimento náutico.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "Encontros náuticos, sunsets, festas à bordo",
    description: "Participe de eventos exclusivos em um ambiente sofisticado.",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    title: "Acesso a um ecossistema de soluções",
    description: "Conecte-se com parceiros e descubra novas oportunidades.",
    icon: <Anchor className="h-6 w-6" />,
  },
  {
    title: "Marketplace, leilões, vantagens exclusivas",
    description: "Beneficie-se de ofertas especiais e serviços premium.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
]

export function CommunitySection() {
  return (
    <section id="comunidade" className="py-20 bg-white relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#D9C38E]/5 to-white z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-[#D9C38E]/20 opacity-50 z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-2 border-[#D9C38E]/20 opacity-50 z-0"></div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Comunidade Pier Club"
          subtitle="Sua embarcação tem um lugar. Você também."
          titleSize="large"
          breakLine={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          {communityFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
              className="backdrop-blur-sm border border-[#D9C38E]/20 shadow-lg hover:shadow-xl hover:border-[#D9C38E]/40 transition-all duration-300"
            />
          ))}
        </div>

        <ScrollReveal delay={700}>
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
                Quero fazer parte da comunidade
                <Users className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

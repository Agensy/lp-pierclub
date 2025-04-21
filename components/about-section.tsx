import Image from "next/image"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0A1A2F]/5 rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#D9C38E]/10 rounded-tr-full z-0"></div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="No Pier Club, você só precisa chegar."
          highlightWord="chegar"
          centered={true}
          titleSize="large"
          breakLine={true}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <ScrollReveal direction="left">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <Image src="/golden-marina.png" alt="Marina Pier Club" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Image
                  src="/logo-pier-negativo-branco.png"
                  alt="Pier Club"
                  width={140}
                  height={50}
                  className="h-12 w-auto mb-2"
                />
                <p className="text-white/90 text-sm">Marina & Eventos</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <h3 className="text-2xl font-semibold text-[#0A1A2F] mb-6 relative inline-block">
                Descubra como redefinimos a experiência náutica
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D9C38E]/0 via-[#D9C38E] to-[#D9C38E]/0"></span>
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <p className="text-base md:text-lg text-gray-700 mb-4 bg-[#0A1A2F]/5 p-4 rounded-lg border-l-4 border-[#D9C38E]">
                Ter uma embarcação deveria ser sinônimo de prazer. Mas, na prática, muitos transformam seu tempo livre
                em logística.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                O Pier Club nasce para redefinir essa equação — com estrutura integrada, serviços cuidadosos e uma
                comunidade viva, humana e acolhedora.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <blockquote className="border-l-4 border-[#D9C38E] pl-6 italic text-xl text-[#0A1A2F] bg-gradient-to-r from-[#D9C38E]/10 to-transparent p-4 rounded-r-lg shadow-sm">
                "Não criamos apenas uma marina. Criamos um ecossistema."
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

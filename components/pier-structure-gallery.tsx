"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { Eye, Anchor, Ship, Building, Shield, Waves, Compass } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

// Todas as imagens da estrutura - SUAS RENDERS 3D!
const allStructureImages = [
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.55.jpeg",
    alt: "Vista aérea lateral do complexo Pier Club",
    title: "Complexo Náutico Completo",
    description: "Vista aérea lateral mostrando hangares modernos, suítes modulares e organização completa da marina",
    category: "Vista Aérea"
  },
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.56.jpeg",
    alt: "Vista frontal da marina Pier Club",
    title: "Arquitetura Moderna",
    description: "Fachada principal com hangares de design contemporâneo e acesso direto ao canal",
    category: "Arquitetura"
  },
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.56 (1).jpeg",
    alt: "Vista lateral da marina com píeres",
    title: "Marina e Píeres",
    description: "Vista lateral destacando os píeres de madeira, hangares e disposição das embarcações",
    category: "Marina"
  },
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.56 (2).jpeg",
    alt: "Vista aérea panorâmica do projeto",
    title: "Panorâmica Completa",
    description: "Visão aérea total mostrando toda a extensão da marina e integração com o ambiente natural",
    category: "Vista Panorâmica"
  },
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.56 (3).jpeg",
    alt: "Complexo terrestre dos hangares",
    title: "Estrutura Terrestre",
    description: "Vista dos hangares e suítes modulares com paisagismo e acessos terrestres",
    category: "Infraestrutura"
  },
  {
    src: "/infraestrutura/WhatsApp Image 2025-06-30 at 10.07.57.jpeg",
    alt: "Vista aérea com estacionamento",
    title: "Acesso e Logística",
    description: "Organização do acesso terrestre, estacionamento e logística do complexo",
    category: "Logística"
  }
]

// Primeiras 3 imagens para grid inicial
const mainStructureImages = allStructureImages.slice(0, 3)

export function PierStructureGallery() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="estrutura" className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Infraestrutura de Excelência"
          titleSize="large"
          subtitle="Conheça as instalações modernas e seguras que fazem do Pier Club o destino náutico mais completo de Bertioga. Cada detalhe foi pensado para oferecer máximo conforto e segurança."
          highlightWord="Infraestrutura"
          breakLine={true}
        />

        {/* Grid principal - Muda entre 3x1 e 3x2 */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ${showMore ? 'lg:grid-cols-3' : ''}`}>
            {(showMore ? allStructureImages : mainStructureImages).map((image, index) => (
              <ScrollReveal key={image.src} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/60 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                    
                    {/* Conteúdo sobreposto */}
                    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                      <div className="bg-[#D9C38E]/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs inline-block w-fit mb-2">
                        {image.category}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md line-clamp-2">
                        {image.description}
                      </p>
                    </div>

                    {/* Indicador de hover */}
                    <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Botão Ver Mais / Ver Menos */}
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#0A1A2F] hover:bg-[#0A1A2F]/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <Eye className="h-5 w-5" />
              {showMore ? "Ver menos fotos" : "Ver todas as fotos"}
            </button>
          </div>
        </div>

        {/* Cards de destaques da infraestrutura */}
        <ScrollReveal delay={200}>
          <div className="max-w-6xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card Tecnologia */}
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D9C38E]/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#D9C38E]/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#D9C38E]" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Tecnologia Avançada</h4>
                  <p className="text-white/80 text-sm">
                    Sistema de monitoramento 24h, sensores de movimento e câmeras de segurança de última geração.
                  </p>
                </div>
              </div>

              {/* Card Sustentabilidade */}
              <div className="bg-gradient-to-br from-[#D9C38E] to-[#D9C38E]/90 rounded-xl p-6 text-[#0A1A2F] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#0A1A2F]/20 rounded-lg flex items-center justify-center mb-4">
                    <Waves className="h-6 w-6 text-[#0A1A2F]" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Sustentabilidade</h4>
                  <p className="text-[#0A1A2F]/80 text-sm">
                    Estruturas eco-friendly com sistemas de tratamento de água e energia solar integrada.
                  </p>
                </div>
              </div>

              {/* Card Acessibilidade */}
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D9C38E]/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#D9C38E]/20 rounded-lg flex items-center justify-center mb-4">
                    <Compass className="h-6 w-6 text-[#D9C38E]" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Fácil Acesso</h4>
                  <p className="text-white/80 text-sm">
                    Localização estratégica com acesso direto ao canal e proximidade às principais vias de Bertioga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 
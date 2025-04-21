"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { ChevronLeft, ChevronRight, Play, Anchor, Utensils, Users, Coffee, Ship } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

// Categorias de experiências baseadas no conteúdo do site
const gallerySlides = [
  {
    src: "/pier-club-complex.png",
    alt: "Complexo Pier Club ao pôr do sol",
    title: "Complexo Náutico Completo",
    description: "Um ecossistema náutico integrado com marina, hospedagem e gastronomia à beira do canal",
    category: "Visão Geral",
    icon: Anchor,
  },
  {
    src: "/marina-sunset-celebration.png",
    alt: "Celebração ao pôr do sol na marina",
    title: "Experiências Sociais",
    description: "Encontros, celebrações e momentos inesquecíveis com vista privilegiada para o canal",
    category: "Eventos e Comunidade",
    icon: Users,
  },
  {
    src: "/floating-cabins-sunset.png",
    alt: "Cabanas flutuantes ao pôr do sol",
    title: "Hospedagem Exclusiva",
    description: "Suítes flutuantes com design contemporâneo e acesso direto à água",
    category: "Hospedagem e Lazer",
    icon: Utensils,
  },
  {
    src: "/waterfront-container-suites.png",
    alt: "Suítes em contêineres à beira d'água",
    title: "Suítes à Beira D'água",
    description: "Hospedagem moderna com deck privativo e vista panorâmica para o canal",
    category: "Hospedagem e Lazer",
    icon: Utensils,
  },
  {
    src: "/deck-breakfast-view.png",
    alt: "Café da manhã com vista para o canal",
    title: "Gastronomia à Beira D'água",
    description: "Experiência gastronômica refinada com vista privilegiada para o canal",
    category: "Gastronomia",
    icon: Coffee,
  },
  {
    src: "/marina-jetski-complex.png",
    alt: "Complexo de marina com barcos e jetskis",
    title: "Estrutura Náutica Premium",
    description: "Vagas para barcos e jetskis com acesso direto ao mar, em um ambiente seguro e bem estruturado",
    category: "Serviços Náuticos",
    icon: Ship,
  },
  {
    src: "/boat-maintenance-service-new.png",
    alt: "Serviço de manutenção de barcos",
    title: "Serviços Náuticos Integrados",
    description: "Manutenção preventiva, limpeza e serviços completos para sua embarcação sempre pronta para navegar",
    category: "Serviços Náuticos",
    icon: Ship,
  },
]

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const slideRef = useRef<HTMLDivElement>(null)
  const [videoUrl, setVideoUrl] = useState<string>("https://www.youtube.com/embed/b_RF-jYeJgk")

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === gallerySlides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeading
          title="Viva a Experiência Pier Club"
          titleSize="large"
          subtitle="Explore a sofisticação e exclusividade do nosso empreendimento, onde cada detalhe foi cuidadosamente planejado para proporcionar experiências inesquecíveis."
          highlightWord="Experiência"
          breakLine={true}
        />

        <div className="max-w-5xl mx-auto mt-16 relative">
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
            <div ref={slideRef} className="relative aspect-[16/9] overflow-hidden">
              {gallerySlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Substituir a sobreposição azul escura por um efeito de luz solar */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f8b04d]/10 to-[#f8b04d]/20 mix-blend-overlay z-10"></div>
                  <Image
                    src={slide.src || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Ajustar o gradiente para manter a legibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/70 via-[#0A1A2F]/20 to-transparent flex flex-col justify-end p-8 z-20">
                    <div className="bg-[#D9C38E]/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs inline-block w-fit mb-2 flex items-center gap-1">
                      {slide.icon && <slide.icon className="h-3 w-3" />}
                      {slide.category}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">{slide.title}</h3>
                    <p className="text-white/90 text-base drop-shadow-md">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-300"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-300"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots navigation */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
              {gallerySlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-[#D9C38E]" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seção de vídeo do YouTube */}
        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto mt-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-[#0A1A2F] flex items-center gap-2">
                  <Play className="h-6 w-6 text-[#D9C38E]" />
                  Conheça o Pier Club
                </h3>
                <p className="text-gray-600 mt-2">
                  Assista ao vídeo e descubra como o Pier Club está redefinindo a experiência náutica em Bertioga.
                </p>
              </div>

              <div className="relative aspect-video bg-gray-100">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/b_RF-jYeJgk?modestbranding=1&rel=0&controls=1&showinfo=0"
                  title="Pier Club Bertioga #Marina & Eventos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6 bg-gray-50">
                <h4 className="text-lg font-semibold text-[#0A1A2F] mb-3">Experiências Exclusivas</h4>
                <p className="text-gray-600">
                  O Pier Club oferece uma combinação única de serviços náuticos, hospedagem, gastronomia refinada e uma
                  comunidade vibrante de entusiastas náuticos. Descubra como podemos transformar sua experiência com
                  barcos e jetskis.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

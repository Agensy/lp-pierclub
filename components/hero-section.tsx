"use client"

import { useEffect, useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { MapPin, Calendar, Lock, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0A1A2F] to-[#0A1A2F]/80 z-0"></div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D9C38E]/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D9C38E]/20 filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Botões arredondados na parte superior */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 text-white flex items-center gap-2 border border-white/10 shadow-lg">
              <MapPin className="h-5 w-5 text-[#D9C38E]" />
              <span>Bertioga – SP</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-3 px-6 text-white flex items-center gap-2 border border-white/10 shadow-lg">
              <Calendar className="h-5 w-5 text-[#D9C38E]" />
              <span>Pré lançamento exclusivo</span>
            </div>
          </div>

          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
              A Experiência Náutica <br />
              <span className="text-[#D9C38E] relative">
                Definitiva
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D9C38E]/0 via-[#D9C38E] to-[#D9C38E]/0"></span>
              </span>{" "}
              em Bertioga
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-[#D9C38E] font-medium mb-8">
              No seu tempo. No seu ritmo. Do seu jeito.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-white/90 mb-12 backdrop-blur-sm py-4 px-6 rounded-lg bg-white/5 border border-white/10">
              Um clube náutico completo à beira de um <span className="text-[#D9C38E] font-medium">rio</span> com acesso
              ao <span className="text-[#D9C38E] font-medium">mar</span> — onde a{" "}
              <span className="text-[#D9C38E] font-medium">estrutura</span> cuida do seu{" "}
              <span className="text-[#D9C38E] font-medium">barco</span> e o{" "}
              <span className="text-[#D9C38E] font-medium">ambiente</span> cuida de{" "}
              <span className="text-[#D9C38E] font-medium">você</span>.
            </p>
          </ScrollReveal>

          {/* Botão de acesso prioritário com efeitos especiais */}
          <ScrollReveal delay={300}>
            <div className="mt-12 flex justify-center">
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="relative bg-[#D9C38E] hover:bg-[#D9C38E]/90 text-[#0A1A2F] rounded-full px-10 py-5 font-medium text-lg transition-all duration-300 flex items-center gap-2 mx-auto group overflow-hidden shadow-[0_0_25px_rgba(217,195,142,0.6)] hover:shadow-[0_0_35px_rgba(217,195,142,0.8)] border border-[#D9C38E]/50"
              >
                {/* Efeito de brilho/glow */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D9C38E]/0 via-white/30 to-[#D9C38E]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

                {/* Efeito de borda pulsante */}
                <span className="absolute inset-0 rounded-full border-2 border-[#D9C38E] opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>

                {/* Conteúdo do botão */}
                <span className="relative z-10">Quero garantir meu acesso prioritário</span>
                <Lock className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          {/* Seta para baixo */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="animate-bounce text-white bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10 shadow-lg hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

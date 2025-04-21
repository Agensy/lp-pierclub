"use client"

import { useEffect } from "react"
import Image from "next/image"
import { confetti } from "@/lib/confetti"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Users, MessageCircle, Zap, Award, Gavel } from "lucide-react"

export function ConfirmationHero() {
  useEffect(() => {
    // Dispara o efeito de confete quando o componente é montado
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D9C38E", "#0A1A2F", "#ffffff"],
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0A1A2F] overflow-hidden py-12 px-4">
      {/* Background com imagem e overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pierclub_background.jpg"
          alt="Pier Club Marina ao pôr do sol"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/80 via-[#0A1A2F]/70 to-[#0A1A2F]/90"></div>
      </div>

      {/* Conteúdo principal - tudo em uma única dobra */}
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="bg-[#D9C38E]/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4 inline-flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D9C38E] mr-2 animate-pulse"></span>
            <span className="text-white">Acesso prioritário confirmado</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Agora você faz parte da Comunidade Pier Club
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Parabéns por fazer parte desta comunidade náutica exclusiva
          </p>
        </div>

        {/* Card principal com benefícios e botão */}
        <div className="bg-[#051525]/90 backdrop-blur-md rounded-xl p-8 border border-[#D9C38E]/20 shadow-xl">
          {/* Badge de pioneirismo */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#D9C38E]/20 px-4 py-2 rounded-full inline-flex items-center">
              <Award className="h-5 w-5 text-[#D9C38E] mr-2" />
              <span className="text-[#D9C38E] font-medium">Seja um dos membros fundadores</span>
            </div>
          </div>

          {/* Descrição geral das vantagens */}
          <div className="text-center mb-8">
            <p className="text-white/90 max-w-2xl mx-auto">
              Como membro da Comunidade Pier Club, você terá acesso a benefícios exclusivos, experiências náuticas
              diferenciadas e uma rede de contatos qualificada.
            </p>
          </div>

          {/* Benefícios em grid de 2x2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#D9C38E]/10 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-[#D9C38E]" />
              </div>
              <h3 className="text-white font-medium text-sm text-center">Networking Exclusivo</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#D9C38E]/10 p-3 rounded-full mb-3">
                <MessageCircle className="h-6 w-6 text-[#D9C38E]" />
              </div>
              <h3 className="text-white font-medium text-sm text-center">Informações Privilegiadas</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#D9C38E]/10 p-3 rounded-full mb-3">
                <Zap className="h-6 w-6 text-[#D9C38E]" />
              </div>
              <h3 className="text-white font-medium text-sm text-center">Acesso Antecipado</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#D9C38E]/10 p-3 rounded-full mb-3">
                <Gavel className="h-6 w-6 text-[#D9C38E]" />
              </div>
              <h3 className="text-white font-medium text-sm text-center">Leilões Exclusivos</h3>
            </div>
          </div>

          {/* Chamada para ação */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Entre agora no nosso grupo exclusivo do WhatsApp</h2>

            {/* Elemento de pioneirismo */}
            <p className="text-white/80 mb-6">
              Seja um dos primeiros a participar e tenha acesso a todas as vantagens da comunidade
            </p>
          </div>

          {/* Botão do WhatsApp */}
          <div className="flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { WhatsappLogo } from "@phosphor-icons/react"
import { confetti } from "@/lib/confetti"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // Dispara o efeito de confete quando o botão é clicado
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#25D366", "#0A1A2F", "#D9C38E"],
    })
  }

  return (
    <a
      href="https://chat.whatsapp.com/G5QFZV1I8PFLUyi0jfKPXl"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#22c55e] text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Efeito de brilho */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

      {/* Efeito de pulsação */}
      <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/30 animate-ping opacity-75"></span>

      {/* Ícone do WhatsApp */}
      <span className={`transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}>
        <WhatsappLogo weight="fill" size={28} />
      </span>

      {/* Texto do botão */}
      <span className="text-lg">Entrar no grupo exclusivo</span>
    </a>
  )
}

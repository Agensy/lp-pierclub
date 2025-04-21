"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Handshake } from "lucide-react"

const partners = [
  {
    name: "Murano Yachts",
    logo: "/partner-1.png",
    description:
      "Sinônimo de design e performance artesanal no universo náutico. Embarcações que unem tecnologia, conforto e elegância.",
    url: "#",
  },
  {
    name: "PrimeShare",
    logo: "/partner-2.png",
    description:
      "A PrimeShare redefine o acesso inteligente à experiências premium, conectando pessoas a momentos extraordinários.",
    url: "#",
  },
  {
    name: "Beach Sushi",
    logo: "/partner-3.png",
    description:
      "Onde a gastronomia japonesa encontra o ritmo do mar. Experiência gastronômica única com vista privilegiada.",
    url: "#",
  },
  {
    name: "All Flags",
    logo: "/partner-4.png",
    description:
      "Conectada aos principais eventos e players do universo náutico, a All Flags contribui para que o Pier Club esteja sempre presente nos momentos mais importantes do calendário náutico nacional e internacional.",
    url: "#",
  },
]

export function PartnersSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<(typeof partners)[0] | null>(null)
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false)

  const openPartnerDetails = (partner: (typeof partners)[0]) => {
    setSelectedPartner(partner)
    setIsDialogOpen(true)
  }

  const openPartnerForm = () => {
    setIsPartnerFormOpen(true)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Alguns dos Nossos Parceiros"
          titleSize="large"
          subtitle="No Pier Club, cada detalhe importa — inclusive quem caminha ao nosso lado. Contamos com a presença de nomes que já são referência no universo náutico."
          breakLine={true}
          highlightWord="Nossos Parceiros"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
          {partners.map((partner, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <div className="text-[#0A1A2F] text-xl font-semibold">{partner.name}</div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {partner.description.substring(0, 100)}
                  {partner.description.length > 100 ? "..." : ""}
                </p>
                <button
                  onClick={() => openPartnerForm()}
                  className="text-[#D9C38E] hover:text-[#0A1A2F] transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  Quero ser parceiro <Handshake className="h-3 w-3" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="italic text-[#0A1A2F] text-base md:text-lg max-w-3xl mx-auto mb-8">
            "Cada uma dessas marcas, à sua maneira, contribui para que o Pier Club vá além da estrutura — entregando uma
            experiência que integra serviço, ambiente e estilo de vida."
          </blockquote>
        </div>
      </div>

      {/* Dialog para detalhes do parceiro */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#0A1A2F]">{selectedPartner?.name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-700 mb-6">{selectedPartner?.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#0A1A2F]/70">Parceiro Oficial Pier Club</span>
              <button
                onClick={() => {
                  setIsDialogOpen(false)
                  openPartnerForm()
                }}
                className="inline-flex items-center gap-2 text-[#D9C38E] hover:text-[#0A1A2F] transition-colors"
              >
                Quero ser parceiro <Handshake className="h-4 w-4" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog para formulário de parceria */}
      <Dialog open={isPartnerFormOpen} onOpenChange={setIsPartnerFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#0A1A2F]">Torne-se um parceiro</DialogTitle>
            <DialogDescription>
              Preencha o formulário abaixo para iniciarmos uma conversa sobre possíveis parcerias com o Pier Club.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Nome da empresa</Label>
              <Input id="company" placeholder="Sua empresa" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Nome do contato</Label>
              <Input id="contact" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Como podemos colaborar?</Label>
              <Textarea id="message" placeholder="Descreva sua proposta de parceria" rows={4} />
            </div>
            <Button className="btn-padrao btn-gold w-full">
              <span className="relative z-10">Enviar proposta</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

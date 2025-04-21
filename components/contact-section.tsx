"use client"

import { EnhancedPipedriveForm } from "@/components/enhanced-pipedrive-form"
import { MapPin, Mail, Phone, Ship, Anchor } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-[#0F172A]">
      {" "}
      {/* Alterado para fundo escuro */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em contato</h2> {/* Texto branco */}
          <p className="text-gray-300 max-w-2xl mx-auto">
            {" "}
            {/* Texto mais claro */}
            Estamos ansiosos para receber você no Pier Club. Entre em contato para garantir seu acesso prioritário ou
            para obter mais informações sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact information */}
          <div className="bg-[#1E293B] text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
            {" "}
            {/* Azul um pouco mais claro */}
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D9C38E]/10 rounded-full filter blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D9C38E]/10 rounded-full filter blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#D9C38E]">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F172A]/80 p-3 rounded-full">
                    {" "}
                    {/* Fundo mais escuro */}
                    <MapPin className="h-6 w-6 text-[#D9C38E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Localização</h4>
                    <p className="text-white/80">Bertioga - SP</p>
                    <p className="text-white/60 text-sm mt-1">
                      Um clube náutico completo à beira de um rio com acesso ao mar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0F172A]/80 p-3 rounded-full">
                    {" "}
                    {/* Fundo mais escuro */}
                    <Mail className="h-6 w-6 text-[#D9C38E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a
                      href="mailto:contato@pierclub.com.br"
                      className="text-white/80 hover:text-[#D9C38E] transition-colors"
                    >
                      contato@pierclub.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0F172A]/80 p-3 rounded-full">
                    {" "}
                    {/* Fundo mais escuro */}
                    <Phone className="h-6 w-6 text-[#D9C38E]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Telefone</h4>
                    <a href="tel:+551234567890" className="text-white/80 hover:text-[#D9C38E] transition-colors">
                      (12) 3456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-lg mb-4 text-[#D9C38E]">Serviços Disponíveis</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 bg-[#0F172A]/80 px-3 py-2 rounded-lg">
                    {" "}
                    {/* Fundo mais escuro */}
                    <Ship className="h-4 w-4 text-[#D9C38E]" />
                    <span className="text-sm">Barcos e Jetskis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#0F172A]/80 px-3 py-2 rounded-lg">
                    {" "}
                    {/* Fundo mais escuro */}
                    <Anchor className="h-4 w-4 text-[#D9C38E]" />
                    <span className="text-sm">Marina Completa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pipedrive Form */}
          <EnhancedPipedriveForm
            variant="dark"
            title="Garanta seu acesso prioritário"
            subtitle="Preencha o formulário abaixo e seja um dos primeiros a fazer parte do Pier Club"
          />
        </div>
      </div>
    </section>
  )
}

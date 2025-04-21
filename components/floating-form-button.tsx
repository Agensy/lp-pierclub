"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { EnhancedPipedriveForm } from "@/components/enhanced-pipedrive-form"
import { Anchor } from "lucide-react"

export function FloatingFormButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#1E40AF] text-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" // Alterado para azul escuro e bordas menos arredondadas
        aria-label="Abrir formulário de contato"
      >
        <Anchor className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          Acesso prioritário
        </span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md p-0 border-none bg-transparent shadow-none">
          <EnhancedPipedriveForm
            variant="dark"
            title="Garanta seu acesso prioritário"
            subtitle="Preencha o formulário abaixo para garantir condições especiais de pré-lançamento"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

import { EnhancedPipedriveForm } from "@/components/enhanced-pipedrive-form"

export default function FormularioPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Acesso Prioritário</h1>
        <EnhancedPipedriveForm
          variant="dark"
          title="Garanta condições especiais"
          subtitle="Seja um dos primeiros a fazer parte do Pier Club e aproveite vantagens exclusivas"
        />
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Ao preencher este formulário, você concorda com nossa política de privacidade.</p>
          <p className="mt-2">
            Dúvidas? Entre em contato pelo email{" "}
            <a href="mailto:contato@pierclub.com.br" className="text-[#D9C38E] hover:text-[#D9C38E]/80">
              contato@pierclub.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

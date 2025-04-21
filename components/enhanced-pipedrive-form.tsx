"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Award, ChevronRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface EnhancedPipedriveFormProps {
  title?: string
  subtitle?: string
  showLogo?: boolean
  variant?: "light" | "dark"
  className?: string
}

export function EnhancedPipedriveForm({
  title = "Garanta seu acesso prioritário",
  subtitle = "Preencha o formulário abaixo para garantir condições especiais de pré-lançamento",
  showLogo = true,
  variant = "dark",
  className = "",
}: EnhancedPipedriveFormProps) {
  const formRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Avoid loading the script multiple times
    if (scriptLoaded.current) return

    // Create the Pipedrive script
    const script = document.createElement("script")
    script.src = "https://webforms.pipedrive.com/f/loader"
    script.async = true

    // Add the script to the DOM
    if (formRef.current && !scriptLoaded.current) {
      scriptLoaded.current = true
      document.body.appendChild(script)

      // Simulate a loading time
      setTimeout(() => setIsLoading(false), 1000)

      // Monitor form submission events (if possible)
      const checkForSubmission = setInterval(() => {
        const thankYouMessage = document.querySelector(".pipedriveWebForms .thankyou-message")
        if (thankYouMessage) {
          setIsSubmitted(true)
          clearInterval(checkForSubmission)
        }
      }, 500)

      return () => {
        clearInterval(checkForSubmission)
      }
    }

    // Clean up the script when the component is unmounted
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Determine color classes based on variant
  const bgColor = "bg-white" // Sempre branco
  const textColor = "text-[#0A1A2F]" // Sempre escuro
  const borderColor = "border-[#0A1A2F]/10" // Sempre claro
  const highlightColor = "text-[#D9C38E]"
  const accentBg = "bg-[#0A1A2F]/5" // Sempre claro

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg ${bgColor} ${className}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D9C38E]/10 filter blur-xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#D9C38E]/5 filter blur-xl -z-0"></div>

      {/* Header */}
      <div className={`relative z-10 p-6 border-b ${borderColor}`}>
        <div className="flex items-center justify-between mb-4">
          {showLogo && (
            <div className="flex-shrink-0">
              <Image
                src="/logo-pier-positivo-azul.png"
                alt="Pier Club"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          )}
          <div className={`${accentBg} px-3 py-1 rounded-full text-sm flex items-center gap-1 ${textColor}`}>
            <Shield className={`h-4 w-4 ${highlightColor}`} />
            <span>Acesso exclusivo</span>
          </div>
        </div>

        <h2 className={`text-xl font-bold ${textColor} mb-2`}>{title}</h2>
        <p className={`${textColor}/80 text-sm`}>{subtitle}</p>
      </div>

      {/* Benefits */}
      <div className={`relative z-10 px-6 pt-4 pb-2 ${accentBg} border-b ${borderColor}`}>
        <h3 className={`text-sm font-medium ${textColor} mb-2 flex items-center gap-1`}>
          <Award className={`h-4 w-4 ${highlightColor}`} />
          <span>Benefícios exclusivos:</span>
        </h3>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {[
            "Prioridade na escolha de vagas",
            "Condições especiais de pré-lançamento",
            "Status de membro fundador",
            "Acesso antecipado à marina",
          ].map((benefit, index) => (
            <div key={index} className={`flex items-start gap-1 text-xs ${textColor}/80`}>
              <CheckCircle2 className={`h-3 w-3 ${highlightColor} mt-0.5 flex-shrink-0`} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="relative z-10 p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-10 h-10 border-2 border-[#D9C38E] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className={`${textColor}/70 text-sm`}>Carregando formulário...</p>
          </div>
        ) : isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#D9C38E]/20 flex items-center justify-center mb-4">
              <CheckCircle2 className={`h-8 w-8 ${highlightColor}`} />
            </div>
            <h3 className={`text-xl font-bold ${textColor} mb-2`}>Obrigado pelo interesse!</h3>
            <p className={`${textColor}/80 text-sm max-w-md mx-auto`}>
              Recebemos seus dados e entraremos em contato em breve com mais informações sobre o Pier Club.
            </p>
          </div>
        ) : (
          <div
            ref={formRef}
            className="pipedriveWebForms"
            data-pd-webforms="https://webforms.pipedrive.com/f/1FR2xLf3qdmSq8lAGAZp1SzYgInTONp4T4PlmoB5gtHFltctbft8v5a6PmGtY6AXF"
          ></div>
        )}
      </div>

      {/* Footer */}
      <div className={`relative z-10 px-6 py-3 ${accentBg} border-t ${borderColor} flex justify-between items-center`}>
        <p className={`text-xs ${textColor}/70`}>Pier Club © {new Date().getFullYear()}</p>
        <a href="#" className={`text-xs flex items-center gap-1 ${highlightColor} hover:underline`}>
          <span>Saiba mais</span>
          <ChevronRight className="h-3 w-3" />
        </a>
      </div>

      {/* Styling for the Pipedrive form */}
      <style jsx global>{`
        /* Styles for the Pipedrive form */
        .pipedriveWebForms form {
          font-family: inherit !important;
        }
        
        .pipedriveWebForms {
          background-color: #0F172A !important; /* Fundo azul escuro para o formulário */
          color: white !important;
          padding: 20px !important;
          border-radius: 8px !important;
        }
        
        .pipedriveWebForms .ppf__button {
          background-color: #1E40AF !important; /* Botão azul escuro */
          color: white !important;
          border-radius: 4px !important; /* Bordas menos arredondadas */
          font-weight: 500 !important;
          transition: all 0.2s ease-in-out !important;
          width: 100% !important; /* Botão de largura completa */
        }
        
        .pipedriveWebForms .ppf__button:hover {
          background-color: #1E3A8A !important;
          transform: translateY(-1px) !important;
        }
        
        .pipedriveWebForms .ppf__field__label {
          font-weight: 500 !important;
          color: rgba(255, 255, 255, 0.8) !important; /* Texto mais claro */
        }
        
        .pipedriveWebForms .ppf__field__input {
          border-radius: 4px !important;
          transition: all 0.2s ease-in-out !important;
          background-color: white !important; /* Campos de entrada brancos */
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
        
        .pipedriveWebForms .ppf__field__input:focus {
          border-color: #D9C38E !important;
          box-shadow: 0 0 0 3px rgba(217, 195, 142, 0.2) !important;
        }
        
        /* Estilo para os radio buttons */
        .pipedriveWebForms .ppf__radio-button__label {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        
        /* Estilo para o texto de exemplo nos campos */
        .pipedriveWebForms .ppf__field__input::placeholder {
          color: rgba(0, 0, 0, 0.4) !important;
        }
        
        /* Estilo para o texto de exemplo */
        .pipedriveWebForms .ppf__field__example {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .pipedriveWebForms {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

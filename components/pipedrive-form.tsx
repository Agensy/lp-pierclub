"use client"

import { useEffect, useRef } from "react"

export function PipedriveForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Evita carregar o script múltiplas vezes
    if (scriptLoaded.current) return

    // Cria o script do Pipedrive
    const script = document.createElement("script")
    script.src = "https://webforms.pipedrive.com/f/loader"
    script.async = true

    // Adiciona o script ao DOM
    if (formRef.current && !scriptLoaded.current) {
      scriptLoaded.current = true
      document.body.appendChild(script)
    }

    // Limpa o script quando o componente for desmontado
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      ref={formRef}
      className="pipedriveWebForms"
      data-pd-webforms="https://webforms.pipedrive.com/f/1FR2xLf3qdmSq8lAGAZp1SzYgInTONp4T4PlmoB5gtHFltctbft8v5a6PmGtY6AXF"
    ></div>
  )
}

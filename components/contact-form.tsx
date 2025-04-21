"use client"

import { useEffect, useRef } from "react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

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
    }

    // Clean up the script when the component is unmounted
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="contato" className="relative py-20 bg-[#0A1A2F] text-white overflow-hidden">
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0A1A2F] to-[#0A1A2F]/90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#D9C38E]/10 to-transparent z-0"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[#D9C38E]/10 filter blur-3xl z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-[#D9C38E]/10 filter blur-3xl z-0"></div>

      <div className="container mx-auto relative z-10 pt-12">
        <SectionHeading
          title="Garanta seu acesso prioritário agora"
          highlightWord="prioritário"
          light={true}
          titleSize="large"
          breakLine={true}
        />

        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border border-[#D9C38E]/20 mt-16 shadow-[0_0_50px_rgba(217,195,142,0.2)] hover:shadow-[0_0_50px_rgba(217,195,142,0.3)] transition-all duration-500">
            {/* Pipedrive Form */}
            <div
              ref={formRef}
              className="pipedriveWebForms"
              data-pd-webforms="https://webforms.pipedrive.com/f/1FR2xLf3qdmSq8lAGAZp1SzYgInTONp4T4PlmoB5gtHFltctbft8v5a6PmGtY6AXF"
            ></div>
          </div>
        </ScrollReveal>
      </div>

      {/* Custom styling for the Pipedrive form to match the site's aesthetic */}
      <style jsx global>{`
        /* Form container */
        .pipedriveWebForms {
          font-family: inherit !important;
          background-color: white !important;
          padding: 20px !important;
          border-radius: 8px !important;
        }
        
        /* Form fields */
        .pipedriveWebForms .ppf__field__input {
          background-color: white !important;
          border: 1px solid #e2e8f0 !important;
          color: #0F172A !important;
          border-radius: 4px !important;
        }

        .pipedriveWebForms .ppf__field__input:focus {
          border-color: rgba(217, 195, 142, 0.5) !important;
          box-shadow: 0 0 0 2px rgba(217, 195, 142, 0.3) !important;
        }
      `}</style>
    </section>
  )
}

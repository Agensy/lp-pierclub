import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  subtitleClassName?: string
  light?: boolean
  highlightWord?: string
  titleSize?: "default" | "large"
  breakLine?: boolean
  customBreak?: boolean // Nova propriedade para quebra de linha personalizada
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  light = false,
  highlightWord,
  titleSize = "default",
  breakLine = false,
  customBreak = false, // Novo parâmetro
}: SectionHeadingProps) {
  let formattedTitle = title

  // Verificação específica para "Comunidade Pier Club"
  if (title === "Comunidade Pier Club") {
    formattedTitle = (
      <>
        Comunidade
        <br />
        <span className="text-[#D9C38E]">Pier Club</span>
      </>
    )
  }
  // Lógica existente para highlightWord e breakLine
  else if (highlightWord && !breakLine) {
    const parts = title.split(highlightWord)
    formattedTitle = (
      <>
        {parts[0]}
        <span className="text-[#D9C38E]">{highlightWord}</span>
        {parts[1]}
      </>
    )
  } else if (breakLine) {
    // Dividir o título em duas partes para quebra de linha
    const words = title.split(" ")
    const midpoint = Math.ceil(words.length / 2)

    const firstHalf = words.slice(0, midpoint).join(" ")
    const secondHalf = words.slice(midpoint).join(" ")

    if (highlightWord) {
      // Se a palavra destacada estiver na primeira metade
      if (firstHalf.includes(highlightWord)) {
        const parts = firstHalf.split(highlightWord)
        formattedTitle = (
          <>
            {parts[0]}
            <span className="text-[#D9C38E]">{highlightWord}</span>
            {parts[1]}
            <br />
            {secondHalf}
          </>
        )
      }
      // Se a palavra destacada estiver na segunda metade
      else if (secondHalf.includes(highlightWord)) {
        const parts = secondHalf.split(highlightWord)
        formattedTitle = (
          <>
            {firstHalf}
            <br />
            {parts[0]}
            <span className="text-[#D9C38E]">{highlightWord}</span>
            {parts[1]}
          </>
        )
      }
      // Se não encontrar a palavra destacada, apenas quebra a linha
      else {
        formattedTitle = (
          <>
            {firstHalf}
            <br />
            {secondHalf}
          </>
        )
      }
    } else {
      formattedTitle = (
        <>
          {firstHalf}
          <br />
          {secondHalf}
        </>
      )
    }
  }

  return (
    <div className={cn("space-y-4 mb-12", centered && "text-center", className)}>
      <ScrollReveal>
        <h2
          className={cn(
            "font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl",
            light ? "text-white" : "text-[#0A1A2F]",
          )}
        >
          {formattedTitle}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={100}>
          <p
            className={cn(
              "max-w-3xl text-base md:text-lg",
              centered && "mx-auto",
              light ? "text-white/80" : "text-gray-600",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}

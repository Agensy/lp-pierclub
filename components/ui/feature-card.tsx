import type React from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"

interface FeatureCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  className?: string
  delay?: number
}

export function FeatureCard({ title, description, icon, className, delay = 0 }: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay} className={cn("group", className)}>
      <div className="p-6 rounded-xl bg-white border border-[#D9C38E]/20 shadow-sm hover:shadow-md transition-all duration-300 h-full">
        {icon && (
          <div className="text-[#D9C38E] mb-4 text-2xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-medium text-[#0A1A2F] mb-2 group-hover:text-[#D9C38E] transition-colors">
          {title}
        </h3>
        {description && <p className="text-base text-gray-600">{description}</p>}
      </div>
    </ScrollReveal>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Substitua a array navLinks com apenas as 5 seções essenciais
const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Comunidade", href: "#comunidade" },
  { name: "Galeria", href: "#galeria" },
  { name: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src={isScrolled ? "/logo-v-pier-positivo-azul.png" : "/logo-v-pier-positivo-branco.png"}
            alt="Pier Club"
            width={140}
            height={50}
            className="h-[53px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#D9C38E]",
                isScrolled ? "text-[#0A1A2F]" : "text-white",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className={cn(
              "ml-4 transition-colors rounded-full",
              isScrolled
                ? "bg-[#0A1A2F] hover:bg-[#0A1A2F]/90 text-white"
                : "bg-white hover:bg-white/90 text-[#0A1A2F]",
            )}
            onClick={() => {
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Acesso Prioritário
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden relative z-10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? (
            <X className={isScrolled ? "text-[#0A1A2F]" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-[#0A1A2F]" : "text-white"} />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[#0A1A2F] flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-white hover:text-[#D9C38E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="mt-4 bg-white hover:bg-white/90 text-[#0A1A2F] rounded-full"
              onClick={() => {
                setIsOpen(false)
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Acesso Prioritário
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

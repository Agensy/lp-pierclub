"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = "20px",
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasAnimated(true)
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, hasAnimated])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance})`
      case "down":
        return `translateY(-${distance})`
      case "left":
        return `translateX(${distance})`
      case "right":
        return `translateX(-${distance})`
      case "none":
        return "none"
      default:
        return `translateY(${distance})`
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : getTransform(),
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pier Club | Marina & Eventos em Bertioga",
  description:
    "Um clube náutico completo à beira de um rio com acesso ao mar — onde a estrutura cuida do seu barco e o ambiente cuida de você.",
  metadataBase: new URL("https://pierclub.com.br"), // Atualize para seu domínio real
  openGraph: {
    title: "Pier Club | Marina & Eventos em Bertioga",
    description:
      "Um clube náutico completo à beira de um rio com acesso ao mar — onde a estrutura cuida do seu barco e o ambiente cuida de você.",
    url: "https://pierclub.com.br", // Atualize para seu domínio real
    siteName: "Pier Club",
    images: [
      {
        url: "/og-image.jpg", // Caminho relativo à pasta public
        width: 1200,
        height: 630,
        alt: "Pier Club Marina & Eventos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pier Club | Marina & Eventos em Bertioga",
    description:
      "Um clube náutico completo à beira de um rio com acesso ao mar — onde a estrutura cuida do seu barco e o ambiente cuida de você.",
    images: ["/og-image.jpg"], // Caminho relativo à pasta public
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

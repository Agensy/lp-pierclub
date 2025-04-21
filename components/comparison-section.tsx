import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"

const comparisonData = [
  {
    aspect: "Integração total de serviços",
    common: false,
    pierClub: "Tudo conectado",
  },
  {
    aspect: "Painel digital da embarcação",
    common: false,
    pierClub: "Monitoramento em tempo real",
  },
  {
    aspect: "Concierge técnico via WhatsApp",
    common: false,
    pierClub: "Suporte proativo e ágil",
  },
  {
    aspect: "Tripulação sob demanda",
    common: false,
    pierClub: "Agendamento simplificado",
  },
  {
    aspect: "Manutenção preventiva integrada",
    common: false,
    pierClub: "Planejada, assistida, sem surpresa",
  },
  {
    aspect: "Limpeza e abastecimento automáticos",
    common: false,
    pierClub: '"Ready-to-go" sempre',
  },
  {
    aspect: "Hospedagem integrada",
    common: false,
    pierClub: "Suítes exclusivas",
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-20 bg-[#0A1A2F] text-white">
      <div className="container mx-auto relative z-10 pt-12">
        <SectionHeading
          title="Marinas Comuns vs. Pier Club"
          subtitle="Descubra o que torna o Pier Club uma experiência única"
          light={true}
          highlightWord="Pier Club"
          breakLine={true}
        />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10">
                    <TableHead className="w-1/3 text-white">Aspecto</TableHead>
                    <TableHead className="text-white text-center">Marinas Comuns</TableHead>
                    <TableHead className="text-white">Pier Club</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <TableCell className="font-medium text-white">{row.aspect}</TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-500/10">
                          <X className="h-4 w-4 text-red-400" />
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#D9C38E]/10">
                            <Check className="h-4 w-4 text-[#D9C38E]" />
                          </span>
                          <span className="text-[#D9C38E]">{row.pierClub}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

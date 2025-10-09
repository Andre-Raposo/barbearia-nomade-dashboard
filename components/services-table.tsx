import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  { name: "Corte Social", description: "Corte clássico, ideal para um visual discreto e alinhado", price: 35 },
  {
    name: "Corte Degradê",
    description: "Transição suave entre comprimentos, com precisão nas laterais e nuca",
    price: 40,
  },
  {
    name: "Corte na Tesoura",
    description: "Técnica 100% tesoura, para controle de volume e caimento natural",
    price: 45,
  },
  { name: "Corte na Zero", description: "Corte na máquina no zero", price: 15 },
  { name: "Corte na Zero Navalhado", description: "Raspado na navalha - mais rente que zero da máquina", price: 30 },
  { name: "Corte Infantil", description: "Crianças de 6-10 anos", price: 40 },
  {
    name: "Black Power",
    description: "Corte estruturado para cabelos crespos, com ênfase no formato, volume e definição do black",
    price: 55,
  },
  {
    name: "Cortes Longos",
    description: "Corte longo com acabamento preciso, ajuste de pontas e definição no formato",
    price: 55,
  },
  {
    name: "Barba",
    description: "Corte e alinhamento dos fios, com definição no contorno e acabamento limpo",
    price: 25,
  },
  {
    name: "Barba Completa",
    description: "Corte, modelagem com toalha quente, navalha e finalização profissional",
    price: 35,
  },
  { name: "Corte & Barba Essencial", description: "Corte e Barba", price: 70 },
  { name: "Corte & Barba Nômade", description: "Corte Degradê, Barba Completa e Sobrancelha", price: 85 },
  { name: "Pezinho", description: "Acabamento nas laterais, nuca e testa para manter o corte alinhado", price: 15 },
  { name: "Limpeza Auricular", description: "Remoção dos pelos da orelha com cera quente", price: 15 },
  { name: "Limpeza Nasal", description: "Remoção dos pelos nasais com cera quente", price: 15 },
  { name: "Sobrancelha na Navalha", description: "", price: 15 },
  { name: "Sobrancelha na Pinça", description: "", price: 25 },
  { name: "Escova", description: "", price: 15 },
  { name: "Penteado", description: "", price: 25 },
  { name: "Adicional Hidratação", description: "", price: 20 },
  { name: "Adicional Skincare", description: "", price: 15 },
]

export function ServicesTable() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Tabela de Serviços e Preços</h3>
        <p className="text-sm text-muted-foreground mt-1">Todos os serviços da Barbearia Nômade</p>
      </div>
      <div className="space-y-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-start justify-between p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
          >
            <div className="flex-1">
              <h4 className="font-medium text-sm">{service.name}</h4>
              {service.description && (
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{service.description}</p>
              )}
            </div>
            <Badge variant="secondary" className="ml-4 shrink-0 bg-primary/10 text-primary hover:bg-primary/20">
              R$ {service.price}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

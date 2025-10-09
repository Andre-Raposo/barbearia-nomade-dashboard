import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const services = [
  { name: "Corte & Barba Nômade", count: 145, percentage: 100, price: 85 },
  { name: "Corte Degradê", count: 98, percentage: 68, price: 40 },
  { name: "Barba Completa", count: 76, percentage: 52, price: 35 },
  { name: "Corte & Barba Essencial", count: 64, percentage: 44, price: 70 },
  { name: "Black Power", count: 42, percentage: 29, price: 55 },
]

export function TopServices() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Serviços Mais Populares</h3>
        <p className="text-sm text-muted-foreground mt-1">Ranking do mês atual</p>
      </div>
      <div className="space-y-6">
        {services.map((service, index) => (
          <div key={service.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {service.count} agendamentos • R$ {service.price}
                  </p>
                </div>
              </div>
            </div>
            <Progress value={service.percentage} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  )
}

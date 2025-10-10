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
    <Card className="p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold">Serviços Mais Populares</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Ranking do mês atual</p>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {services.map((service, index) => (
          <div key={service.name}>
            <div className="flex items-start sm:items-center justify-between mb-2 gap-2">
              <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs sm:text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">{service.name}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {service.count} agendamentos • R$ {service.price}
                  </p>
                </div>
              </div>
            </div>
            <Progress value={service.percentage} className="h-1.5 sm:h-2" />
          </div>
        ))}
      </div>
    </Card>
  )
}

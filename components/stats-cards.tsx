import { Card } from "@/components/ui/card"
import { Calendar, Users, DollarSign, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Agendamentos Hoje",
    value: "12",
    change: "+3 desde ontem",
    icon: Calendar,
    trend: "up",
  },
  {
    name: "Clientes Ativos",
    value: "248",
    change: "+12 este mês",
    icon: Users,
    trend: "up",
  },
  {
    name: "Receita Mensal",
    value: "R$ 18.450",
    change: "+15% vs mês anterior",
    icon: DollarSign,
    trend: "up",
  },
  {
    name: "Taxa de Ocupação",
    value: "87%",
    change: "+5% esta semana",
    icon: TrendingUp,
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.name}
          className="p-6 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-orange-600/20 flex items-center justify-center border border-primary/20">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
            <p className="text-3xl font-bold mt-1 text-foreground">{stat.value}</p>
            <p className="text-xs text-primary mt-2 font-medium">{stat.change}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

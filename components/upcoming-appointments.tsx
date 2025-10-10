import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const appointments = [
  {
    id: 1,
    client: "Carlos Mendes",
    service: "Corte + Barba",
    time: "14:00",
    status: "confirmado",
  },
  {
    id: 2,
    client: "Pedro Santos",
    service: "Corte Degradê",
    time: "15:00",
    status: "confirmado",
  },
  {
    id: 3,
    client: "Lucas Oliveira",
    service: "Barba Completa",
    time: "16:00",
    status: "pendente",
  },
  {
    id: 4,
    client: "Rafael Costa",
    service: "Corte Social",
    time: "17:00",
    status: "confirmado",
  },
  {
    id: 5,
    client: "Bruno Lima",
    service: "Corte + Barba",
    time: "18:00",
    status: "confirmado",
  },
]

export function UpcomingAppointments() {
  return (
    <Card className="p-4 sm:p-6 border-border/50">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold">Próximos Agendamentos</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Horários de hoje</p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border/50 bg-card hover:bg-accent/50 transition-colors"
          >
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
              <AvatarFallback className="bg-gradient-to-br from-primary to-orange-600 text-white text-xs sm:text-sm">
                {appointment.client
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm sm:text-base truncate">{appointment.client}</p>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{appointment.service}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 justify-between sm:justify-end w-full sm:w-auto">
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                {appointment.time}
              </div>
              <Badge
                variant={appointment.status === "confirmado" ? "default" : "secondary"}
                className={`text-xs ${appointment.status === "confirmado" ? "bg-gradient-to-r from-primary to-orange-600 text-white" : ""}`}
              >
                {appointment.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

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
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Próximos Agendamentos</h3>
        <p className="text-sm text-muted-foreground mt-1">Horários de hoje</p>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center gap-4 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
          >
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {appointment.client
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{appointment.client}</p>
              <p className="text-sm text-muted-foreground truncate">{appointment.service}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {appointment.time}
              </div>
              <Badge
                variant={appointment.status === "confirmado" ? "default" : "secondary"}
                className={appointment.status === "confirmado" ? "bg-primary text-primary-foreground" : ""}
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

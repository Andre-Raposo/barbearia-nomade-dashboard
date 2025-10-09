"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Seg", appointments: 18 },
  { day: "Ter", appointments: 22 },
  { day: "Qua", appointments: 20 },
  { day: "Qui", appointments: 25 },
  { day: "Sex", appointments: 28 },
  { day: "Sáb", appointments: 32 },
  { day: "Dom", appointments: 15 },
]

const chartConfig = {
  appointments: {
    label: "Agendamentos",
    color: "hsl(var(--primary))",
  },
}

export function AppointmentsChart() {
  return (
    <Card className="lg:col-span-3 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Agendamentos Semanais</h3>
        <p className="text-sm text-muted-foreground mt-1">Distribuição por dia da semana</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} className="text-xs" />
          <YAxis tickLine={false} axisLine={false} className="text-xs" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="appointments" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}

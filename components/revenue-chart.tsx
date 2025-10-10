"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 12400 },
  { month: "Fev", revenue: 13800 },
  { month: "Mar", revenue: 15200 },
  { month: "Abr", revenue: 14600 },
  { month: "Mai", revenue: 16800 },
  { month: "Jun", revenue: 18450 },
]

const chartConfig = {
  revenue: {
    label: "Receita",
    color: "hsl(var(--primary))",
  },
}

export function RevenueChart() {
  return (
    <Card className="lg:col-span-4 p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold">Receita Mensal</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Evolução da receita nos últimos 6 meses</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[250px] sm:h-[300px] w-full">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-[10px] sm:text-xs" />
          <YAxis
            tickLine={false}
            axisLine={false}
            className="text-[10px] sm:text-xs"
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            width={45}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#fillRevenue)"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}

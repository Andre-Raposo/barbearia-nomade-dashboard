import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { AppointmentsChart } from "@/components/appointments-chart"
import { UpcomingAppointments } from "@/components/upcoming-appointments"
import { TopServices } from "@/components/top-services"
import { ServicesTable } from "@/components/services-table"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-balance">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bem-vindo ao painel da Barbearia Nômade</p>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-7">
          <RevenueChart />
          <AppointmentsChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingAppointments />
          <TopServices />
        </div>

        <ServicesTable />
      </div>
    </DashboardLayout>
  )
}

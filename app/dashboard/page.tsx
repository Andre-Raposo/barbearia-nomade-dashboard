"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { AppointmentsChart } from "@/components/appointments-chart"
import { UpcomingAppointments } from "@/components/upcoming-appointments"
import { TopServices } from "@/components/top-services"
import { ServicesTable } from "@/components/services-table"
import { SettingsSection } from "@/components/settings-section"
import { Users, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [router])

  return (
    <DashboardLayout>
      <div className="space-y-10 sm:space-y-12 lg:space-y-16">
        <section id="dashboard" className="scroll-mt-20">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Dashboard
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Bem-vindo ao painel da Barbearia Nômade</p>
          </div>

          <div className="mt-8">
            <StatsCards />
          </div>

          <div className="grid gap-6 lg:grid-cols-7 mt-8">
            <RevenueChart />
            <AppointmentsChart />
          </div>
        </section>

        <section id="agendamentos" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Agendamentos</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Gerencie os horários da barbearia</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <UpcomingAppointments />
            <AppointmentsChart />
          </div>
        </section>

        <section id="clientes" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Clientes</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Base de clientes da barbearia</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card p-8 sm:p-12 text-center shadow-sm">
            <Users className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">
              Seção de gerenciamento de clientes em desenvolvimento
            </p>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Serviços</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Tabela de preços e serviços oferecidos</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ServicesTable />
            <TopServices />
          </div>
        </section>

        <section id="financeiro" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Financeiro</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Controle financeiro e receitas</p>
          </div>
          <RevenueChart />
        </section>

        <section id="relatorios" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Relatórios</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Análises e estatísticas detalhadas</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card p-8 sm:p-12 text-center shadow-sm">
            <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground text-base sm:text-lg">Seção de relatórios em desenvolvimento</p>
          </div>
        </section>

        <section id="configuracoes" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Configurações</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-2">Gerencie as configurações da barbearia</p>
          </div>
          <SettingsSection />
        </section>
      </div>
    </DashboardLayout>
  )
}

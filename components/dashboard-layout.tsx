"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Scissors, BarChart3, Settings, Menu, X, Home, DollarSign, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", id: "dashboard", icon: Home },
  { name: "Agendamentos", id: "agendamentos", icon: Calendar },
  { name: "Clientes", id: "clientes", icon: Users },
  { name: "Serviços", id: "servicos", icon: Scissors },
  { name: "Financeiro", id: "financeiro", icon: DollarSign },
  { name: "Relatórios", id: "relatorios", icon: BarChart3 },
  { name: "Configurações", id: "configuracoes", icon: Settings },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setSidebarOpen(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-2xl lg:shadow-none",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between px-6 border-b border-sidebar-border bg-gradient-to-r from-sidebar to-sidebar/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-lg shadow-primary/30 ring-2 ring-primary/20">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-sidebar-foreground">Barbearia</h2>
                <p className="text-sm text-primary font-semibold tracking-wide">NÔMADE</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent rounded-lg"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200",
                  "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-1",
                  activeSection === item.id &&
                    "bg-gradient-to-r from-primary to-orange-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/40 translate-x-0 hover:translate-x-0",
                )}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="border-t border-sidebar-border p-4 bg-gradient-to-t from-sidebar/50 to-transparent">
            <div className="flex items-center gap-3 p-3 rounded-xl mb-3 bg-sidebar-accent/30">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center shadow-lg shadow-primary/30 ring-2 ring-primary/20 flex-shrink-0">
                <span className="text-base font-bold text-white">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-sidebar-foreground truncate">Admin</p>
                <p className="text-sm text-muted-foreground truncate">Administrador</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start gap-2 h-11 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 bg-transparent transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="font-medium">Sair do Sistema</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 flex h-20 items-center gap-4 border-b border-border bg-card/95 backdrop-blur-xl supports-[backdrop-filter]:bg-card/80 px-4 sm:px-6 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10 hover:text-primary rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex-1" />
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-orange-600/10 border border-primary/20 shadow-sm">
            <span className="text-sm font-semibold text-primary">
              {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">{children}</main>
      </div>
    </div>
  )
}

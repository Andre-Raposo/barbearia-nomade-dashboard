"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Building2, Users, Clock, Bell, DollarSign, Lock, Save, Plus, Trash2 } from "lucide-react"

export function SettingsSection() {
  const [barbeiros, setBarbeiros] = useState([
    { id: 1, nome: "João Silva", email: "joao@barbearianomade.com" },
    { id: 2, nome: "Pedro Santos", email: "pedro@barbearianomade.com" },
  ])

  return (
    <Tabs defaultValue="barbearia" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-card/50 p-2">
        <TabsTrigger value="barbearia" className="gap-2 text-xs sm:text-sm">
          <Building2 className="w-4 h-4" />
          <span className="hidden sm:inline">Barbearia</span>
        </TabsTrigger>
        <TabsTrigger value="usuarios" className="gap-2 text-xs sm:text-sm">
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">Usuários</span>
        </TabsTrigger>
        <TabsTrigger value="horarios" className="gap-2 text-xs sm:text-sm">
          <Clock className="w-4 h-4" />
          <span className="hidden sm:inline">Horários</span>
        </TabsTrigger>
        <TabsTrigger value="notificacoes" className="gap-2 text-xs sm:text-sm">
          <Bell className="w-4 h-4" />
          <span className="hidden sm:inline">Notificações</span>
        </TabsTrigger>
        <TabsTrigger value="financeiro" className="gap-2 text-xs sm:text-sm">
          <DollarSign className="w-4 h-4" />
          <span className="hidden sm:inline">Financeiro</span>
        </TabsTrigger>
        <TabsTrigger value="seguranca" className="gap-2 text-xs sm:text-sm">
          <Lock className="w-4 h-4" />
          <span className="hidden sm:inline">Segurança</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="barbearia" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Informações da Barbearia</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome da Barbearia</Label>
                <Input id="nome" defaultValue="Barbearia Nômade" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" defaultValue="(11) 98765-4321" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endereco">Endereço</Label>
              <Input id="endereco" defaultValue="Rua das Flores, 123 - Centro" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" defaultValue="@barbearianomade" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" defaultValue="(11) 98765-4321" />
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="usuarios" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
            <h3 className="text-lg sm:text-xl font-semibold">Barbeiros</h3>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Barbeiro
            </Button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {barbeiros.map((barbeiro) => (
              <div
                key={barbeiro.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg border border-border/50 bg-card/50 gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">{barbeiro.nome}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{barbeiro.email}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto border-destructive/50 text-destructive hover:bg-destructive/10 bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remover
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="horarios" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Horário de Funcionamento</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="abertura">Horário de Abertura</Label>
                <Input id="abertura" type="time" defaultValue="09:00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechamento">Horário de Fechamento</Label>
                <Input id="fechamento" type="time" defaultValue="19:00" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="intervalo">Intervalo entre Atendimentos (min)</Label>
                <Input id="intervalo" type="number" defaultValue="15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="almoco">Horário de Almoço</Label>
                <Input id="almoco" defaultValue="12:00 - 13:00" />
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20">
              <Save className="w-4 h-4 mr-2" />
              Salvar Horários
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="notificacoes" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Configurações de Notificações</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-border/50">
              <div className="flex-1">
                <p className="font-medium text-sm sm:text-base">Lembrete de Agendamento</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Enviar WhatsApp 1h antes do horário</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-border/50">
              <div className="flex-1">
                <p className="font-medium text-sm sm:text-base">Confirmação de Agendamento</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Enviar confirmação automática</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-border/50">
              <div className="flex-1">
                <p className="font-medium text-sm sm:text-base">Alerta de Cancelamento</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Notificar quando cliente cancelar</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="financeiro" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Configurações Financeiras</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="meta">Meta Mensal de Faturamento (R$)</Label>
              <Input id="meta" type="number" defaultValue="25000" />
            </div>
            <div className="space-y-3">
              <Label>Formas de Pagamento Aceitas</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border/50">
                  <span className="text-sm sm:text-base">Dinheiro</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border/50">
                  <span className="text-sm sm:text-base">Cartão de Crédito/Débito</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border/50">
                  <span className="text-sm sm:text-base">PIX</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="seguranca" className="mt-6">
        <Card className="p-4 sm:p-6 border-border/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Segurança</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="senha-atual">Senha Atual</Label>
              <Input id="senha-atual" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nova-senha">Nova Senha</Label>
              <Input id="nova-senha" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
              <Input id="confirmar-senha" type="password" />
            </div>
            <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg hover:shadow-primary/20">
              <Lock className="w-4 h-4 mr-2" />
              Alterar Senha
            </Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

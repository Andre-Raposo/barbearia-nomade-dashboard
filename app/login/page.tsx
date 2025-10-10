"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      if (username === "Admin" && password === "ADM123") {
        localStorage.setItem("isAuthenticated", "true")
        router.push("/dashboard")
      } else {
        setError("Usuário ou senha incorretos")
        setIsLoading(false)
        setTimeout(() => setError(""), 3000)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(10,10,10)] p-4 sm:p-6">
      <Card className="w-full max-w-md bg-[rgb(18,18,18)] border-border/50 shadow-2xl">
        <CardHeader className="space-y-6 text-center pb-8">
          <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-4 ring-orange-500/10">
            <Scissors className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Barbearia Nômade
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Acesso exclusivo para administradores
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-base font-medium">
                Usuário
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-base bg-background/50 border-border/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base bg-background/50 border-border/50 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-base bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="mt-8 p-4 rounded-lg bg-muted/30 border border-border/30">
            <p className="text-xs text-center text-muted-foreground mb-2 font-medium">Credenciais de teste:</p>
            <div className="space-y-1 text-center">
              <p className="text-sm font-mono text-foreground">
                Usuário: <span className="font-semibold text-orange-500">Admin</span>
              </p>
              <p className="text-sm font-mono text-foreground">
                Senha: <span className="font-semibold text-orange-500">ADM123</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

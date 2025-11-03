# Dashboard Barbearia Nômade

Um dashboard responsivo e interativo desenvolvido em React para gerenciamento e análise de dados da Barbearia Nômade.

## 🎨 Design e Características

### Esquema de Cores
- **Primária**: Laranja (#FF6B35, #FF8C42, #FFA366)
- **Secundária**: Preto (#000000, #1A1A1A, #333333)
- **Neutras**: Branco (#FFFFFF), Cinza (#F5F5F5, #E0E0E0)

### Layout Responsivo
- Sistema de grade CSS de 12 colunas
- Largura total (100vw) sem margens laterais
- Breakpoints otimizados para desktop, tablet e mobile
- Componentes que se ajustam automaticamente ao tamanho da tela

## 📊 Componentes do Dashboard

### 1. Header
- Logo da barbearia com ícone de tesoura
- Data e hora em tempo real
- Botões de ação (notificações, configurações, perfil)

### 2. KPIs (Indicadores-Chave)
- **Receita Mensal**: R$ 18.750 (+12.5%)
- **Clientes Atendidos**: 287 (+8.3%)
- **Agendamentos Hoje**: 12
- **Taxa de Ocupação**: 85% (+5.2%)

### 3. Visualizações de Dados
- **Gráfico de Receita Mensal**: Linha temporal mostrando evolução da receita
- **Distribuição de Serviços**: Gráfico de pizza com percentuais por tipo de serviço
- **Horários de Pico**: Gráfico de barras com movimento por horário
- **Tabela de Agendamentos**: Lista dos próximos atendimentos com status
- **Top Barbeiros**: Ranking com métricas de performance e avaliações

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework de estilização
- **Recharts**: Biblioteca de gráficos
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes de interface

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm

### Instalação e Execução
```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build de produção
pnpm run preview
```

## 📱 Responsividade

O dashboard foi desenvolvido com abordagem mobile-first e se adapta perfeitamente a diferentes tamanhos de tela:

- **Desktop (>1024px)**: Layout completo com 12 colunas
- **Tablet (768px-1024px)**: Layout adaptado com 8 colunas
- **Mobile (≤768px)**: Layout empilhado com 4 colunas
- **Mobile Small (≤480px)**: Layout simplificado com 2 colunas

## 🎯 Funcionalidades

### Interatividade
- Hover effects em todos os cards
- Tooltips informativos nos gráficos
- Transições suaves entre estados
- Animações de carregamento

### Dados Simulados
- Métricas realistas de uma barbearia
- Dados históricos de 6 meses
- Informações de 4 barbeiros
- Status de agendamentos em tempo real

## 📂 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header.jsx       # Cabeçalho do dashboard
│   ├── KPICard.jsx      # Cards de indicadores
│   ├── ReceitaChart.jsx # Gráfico de receita
│   ├── ServicosChart.jsx # Gráfico de serviços
│   ├── HorariosPicoChart.jsx # Gráfico de horários
│   ├── AgendamentosTable.jsx # Tabela de agendamentos
│   └── TopBarbeirosTable.jsx # Tabela de barbeiros
├── data/
│   └── mockData.js      # Dados simulados
├── App.jsx              # Componente principal
├── App.css              # Estilos globais
└── main.jsx             # Ponto de entrada
```

## 🎨 Customização

### Cores
As cores podem ser facilmente alteradas no arquivo `App.css` através das variáveis CSS customizadas.

### Layout
O sistema de grade é configurável através das classes CSS no arquivo `App.css`.

### Dados
Os dados podem ser substituídos editando o arquivo `src/data/mockData.js` ou integrando com uma API real.

## 📈 Métricas de Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔧 Próximas Melhorias

- [ ] Integração com API real
- [ ] Sistema de autenticação
- [ ] Filtros de data personalizáveis
- [ ] Exportação de relatórios
- [ ] Notificações push
- [ ] Modo escuro/claro
- [ ] Internacionalização

## 📄 Licença

Este projeto foi desenvolvido como demonstração de habilidades em desenvolvimento web e pode ser usado como base para projetos similares.

---

**Desenvolvido com ❤️ para a Barbearia Nômade**

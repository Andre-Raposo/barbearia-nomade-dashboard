import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';
import Header from './components/Header.jsx';
import KPICard from './components/KPICard.jsx';
import ReceitaChart from './components/ReceitaChart.jsx';
import ServicosChart from './components/ServicosChart.jsx';
import HorariosPicoChart from './components/HorariosPicoChart.jsx';
import AgendamentosTable from './components/AgendamentosTable.jsx';
import TopBarbeirosTable from './components/TopBarbeirosTable.jsx';
import {
  kpiData,
  receitaMensal,
  distribuicaoServicos,
  horariosPico,
  ultimosAgendamentos,
  topBarbeiros
} from './data/mockData.js';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="dashboard-grid">
        {/* KPIs - 4 colunas cada em desktop, 2 em tablet, 1 em mobile */}
        <div className="grid-span-3 lg-span-4 md-span-2 sm-span-1">
          <KPICard
            title="Receita Mensal"
            value={kpiData.receitaMensal}
            icon={DollarSign}
            trend="up"
            trendValue={12.5}
            className="card-hover"
          />
        </div>
        
        <div className="grid-span-3 lg-span-4 md-span-2 sm-span-1">
          <KPICard
            title="Clientes Atendidos"
            value={kpiData.clientesAtendidos}
            icon={Users}
            trend="up"
            trendValue={8.3}
            className="card-hover"
          />
        </div>
        
        <div className="grid-span-3 lg-span-4 md-span-2 sm-span-1">
          <KPICard
            title="Agendamentos Hoje"
            value={kpiData.agendamentosHoje}
            icon={Calendar}
            trend="neutral"
            trendValue={0}
            className="card-hover"
          />
        </div>
        
        <div className="grid-span-3 lg-span-4 md-span-2 sm-span-1">
          <KPICard
            title="Taxa de Ocupação"
            value={kpiData.taxaOcupacao}
            icon={TrendingUp}
            trend="up"
            trendValue={5.2}
            className="card-hover"
          />
        </div>

        {/* Gráfico de Receita - 8 colunas em desktop, largura total em mobile */}
        <div className="grid-span-8 lg-span-8 md-span-4 sm-span-2">
          <ReceitaChart data={receitaMensal} />
        </div>

        {/* Gráfico de Serviços - 4 colunas em desktop, largura total em mobile */}
        <div className="grid-span-4 lg-span-8 md-span-4 sm-span-2">
          <ServicosChart data={distribuicaoServicos} />
        </div>

        {/* Gráfico de Horários de Pico - largura total */}
        <div className="grid-span-12 lg-span-8 md-span-4 sm-span-2">
          <HorariosPicoChart data={horariosPico} />
        </div>

        {/* Tabela de Agendamentos - 8 colunas em desktop, largura total em mobile */}
        <div className="grid-span-8 lg-span-8 md-span-4 sm-span-2">
          <AgendamentosTable data={ultimosAgendamentos} />
        </div>

        {/* Tabela de Top Barbeiros - 4 colunas em desktop, largura total em mobile */}
        <div className="grid-span-4 lg-span-8 md-span-4 sm-span-2">
          <TopBarbeirosTable data={topBarbeiros} />
        </div>
      </main>
    </div>
  );
}

export default App;

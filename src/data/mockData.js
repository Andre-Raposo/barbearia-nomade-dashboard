// Dados simulados para o Dashboard da Barbearia Nômade

export const kpiData = {
  receitaMensal: 18750,
  clientesAtendidos: 287,
  agendamentosHoje: 12,
  taxaOcupacao: 85
};

export const receitaMensal = [
  { mes: 'Jan', receita: 15200 },
  { mes: 'Fev', receita: 16800 },
  { mes: 'Mar', receita: 18200 },
  { mes: 'Abr', receita: 17500 },
  { mes: 'Mai', receita: 19300 },
  { mes: 'Jun', receita: 18750 }
];

export const distribuicaoServicos = [
  { nome: 'Corte', valor: 45, quantidade: 129 },
  { nome: 'Barba', valor: 25, quantidade: 87 },
  { nome: 'Combo', valor: 20, quantidade: 57 },
  { nome: 'Sobrancelha', valor: 7, quantidade: 20 },
  { nome: 'Tratamentos', valor: 3, quantidade: 9 }
];

export const horariosPico = [
  { horario: '8h', atendimentos: 8 },
  { horario: '9h', atendimentos: 12 },
  { horario: '10h', atendimentos: 18 },
  { horario: '11h', atendimentos: 22 },
  { horario: '12h', atendimentos: 15 },
  { horario: '13h', atendimentos: 10 },
  { horario: '14h', atendimentos: 25 },
  { horario: '15h', atendimentos: 28 },
  { horario: '16h', atendimentos: 24 },
  { horario: '17h', atendimentos: 20 },
  { horario: '18h', atendimentos: 16 }
];

export const avaliacaoClientes = {
  media: 4.7,
  total: 234,
  distribuicao: [
    { estrelas: 5, quantidade: 156 },
    { estrelas: 4, quantidade: 52 },
    { estrelas: 3, quantidade: 18 },
    { estrelas: 2, quantidade: 6 },
    { estrelas: 1, quantidade: 2 }
  ]
};

export const ultimosAgendamentos = [
  { id: 1, cliente: 'João Silva', servico: 'Corte + Barba', horario: '14:30', barbeiro: 'Carlos', status: 'Confirmado' },
  { id: 2, cliente: 'Pedro Santos', servico: 'Corte', horario: '15:00', barbeiro: 'Miguel', status: 'Em andamento' },
  { id: 3, cliente: 'Lucas Oliveira', servico: 'Barba', horario: '15:30', barbeiro: 'Rafael', status: 'Aguardando' },
  { id: 4, cliente: 'Gabriel Costa', servico: 'Combo', horario: '16:00', barbeiro: 'Carlos', status: 'Confirmado' },
  { id: 5, cliente: 'Mateus Lima', servico: 'Corte', horario: '16:30', barbeiro: 'Miguel', status: 'Confirmado' }
];

export const topBarbeiros = [
  { nome: 'Carlos Mendes', atendimentos: 98, receita: 6850, avaliacao: 4.9 },
  { nome: 'Miguel Santos', atendimentos: 87, receita: 5920, avaliacao: 4.8 },
  { nome: 'Rafael Silva', atendimentos: 76, receita: 4980, avaliacao: 4.7 },
  { nome: 'André Costa', atendimentos: 26, receita: 1000, avaliacao: 4.6 }
];

export const agendaSemanal = [
  { dia: 'Segunda', ocupacao: 85 },
  { dia: 'Terça', ocupacao: 78 },
  { dia: 'Quarta', ocupacao: 92 },
  { dia: 'Quinta', ocupacao: 88 },
  { dia: 'Sexta', ocupacao: 95 },
  { dia: 'Sábado', ocupacao: 100 },
  { dia: 'Domingo', ocupacao: 45 }
];

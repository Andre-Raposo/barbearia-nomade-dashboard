import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const AgendamentosTable = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmado':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Em andamento':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Aguardando':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Próximos Agendamentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Cliente</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Serviço</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Horário</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Barbeiro</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((agendamento) => (
                <tr key={agendamento.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 text-sm font-medium text-gray-900">
                    {agendamento.cliente}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600">
                    {agendamento.servico}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 font-mono">
                    {agendamento.horario}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600">
                    {agendamento.barbeiro}
                  </td>
                  <td className="py-3 px-2">
                    <Badge className={getStatusColor(agendamento.status)}>
                      {agendamento.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgendamentosTable;

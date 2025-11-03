import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Star } from 'lucide-react';

const TopBarbeirosTable = ({ data }) => {
  const formatCurrency = (value) => `R$ ${value.toLocaleString('pt-BR')}`;

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) 
                ? 'fill-orange-400 text-orange-400' 
                : i < rating 
                ? 'fill-orange-200 text-orange-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
      </div>
    );
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Barbeiros do Mês</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Barbeiro</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Atendimentos</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Receita</th>
                <th className="text-left py-3 px-2 font-semibold text-sm text-gray-600">Avaliação</th>
              </tr>
            </thead>
            <tbody>
              {data.map((barbeiro, index) => (
                <tr key={barbeiro.nome} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-orange-600' : 'bg-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {barbeiro.nome}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 font-medium">
                    {barbeiro.atendimentos}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600 font-medium">
                    {formatCurrency(barbeiro.receita)}
                  </td>
                  <td className="py-3 px-2">
                    {renderStars(barbeiro.avaliacao)}
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

export default TopBarbeirosTable;

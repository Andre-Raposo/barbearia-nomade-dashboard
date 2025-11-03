import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const KPICard = ({ title, value, icon: Icon, trend, trendValue, className = "" }) => {
  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (title.includes('Receita')) {
        return `R$ ${val.toLocaleString('pt-BR')}`;
      }
      if (title.includes('Taxa')) {
        return `${val}%`;
      }
      return val.toLocaleString('pt-BR');
    }
    return val;
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-orange-500" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">
          {formatValue(value)}
        </div>
        {trend && trendValue && (
          <p className={`text-xs mt-1 ${
            trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600'
          }`}>
            {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}% em relação ao mês anterior
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default KPICard;

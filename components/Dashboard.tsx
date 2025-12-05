import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, MousePointerClick, MapPin, MessageCircle } from 'lucide-react';

const visitData = [
  { name: 'Sem 1', visits: 120, leads: 45 },
  { name: 'Sem 2', visits: 135, leads: 52 },
  { name: 'Sem 3', visits: 160, leads: 68 },
  { name: 'Sem 4', visits: 195, leads: 85 },
];

const mixData = [
  { name: 'Oportunidade', value: 40, color: '#ef4444' }, // Red
  { name: 'Crédito', value: 20, color: '#22c55e' }, // Green
  { name: 'Bastidores', value: 30, color: '#f97316' }, // Orange
  { name: 'Utilidade', value: 10, color: '#3b82f6' }, // Blue
];

const kpis = [
  { label: 'CTR (Link Bio)', value: '4.2%', change: '+12%', icon: MousePointerClick, color: 'text-purple-600' },
  { label: 'Leads WhatsApp', value: '250', change: '+20%', icon: MessageCircle, color: 'text-green-600' },
  { label: 'Rotas Google Maps', value: '185', change: '+8%', icon: MapPin, color: 'text-blue-600' },
  { label: 'Engajamento Local', value: '1.2k', change: '+15%', icon: TrendingUp, color: 'text-orange-600' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500 font-medium">{kpi.label}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg bg-gray-50 ${kpi.color}`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
              {kpi.change} este mês
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Tráfego Loja vs. Leads</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
                <Line type="monotone" dataKey="visits" name="Visitas Loja" stroke="#0054a6" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="leads" name="Leads WhatsApp" stroke="#ffcc00" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Mix */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Mix de Conteúdo</h3>
          <div className="h-72 w-full flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mixData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
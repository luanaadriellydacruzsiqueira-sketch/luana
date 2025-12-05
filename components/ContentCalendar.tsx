import React, { useState } from 'react';
import { CalendarItem, Channel } from '../types';
import { CheckCircle2, Circle, Smartphone, Instagram, Map } from 'lucide-react';

const initialData: CalendarItem[] = [
  // Semana 1
  { id: 1, week: 1, day: 'Seg', channel: Channel.INSTAGRAM, format: 'Stories + Feed', topic: 'Bom dia com Oferta: Gerente na porta', objective: 'Atrair fluxo', done: true },
  { id: 2, week: 1, day: 'Qua', channel: Channel.INSTAGRAM, format: 'Reels', topic: 'Humor: Dublagem sobre carnê', objective: 'Engajamento', done: false },
  { id: 3, week: 1, day: 'Sex', channel: Channel.WHATSAPP, format: 'Vídeo Curto', topic: 'Sextou: Giro de ofertas na loja', objective: 'Venda imediata', done: false },
  // Semana 2
  { id: 4, week: 2, day: 'Ter', channel: Channel.GOOGLE, format: 'Foto', topic: 'Foto da fachada atualizada', objective: 'SEO Local', done: false },
  { id: 5, week: 2, day: 'Qui', channel: Channel.INSTAGRAM, format: 'Carrossel', topic: '3 Vantagens do Carnê MM', objective: 'Quebra de objeção', done: false },
  { id: 6, week: 2, day: 'Sáb', channel: Channel.INSTAGRAM, format: 'Stories', topic: 'Prova Social: Cliente feliz', objective: 'Confiança', done: false },
  // Semana 3
  { id: 7, week: 3, day: 'Seg', channel: Channel.INSTAGRAM, format: 'Reels', topic: 'Bastidores: Montagem de móveis', objective: 'Mostrar serviço', done: false },
  { id: 8, week: 3, day: 'Qua', channel: Channel.INSTAGRAM, format: 'Enquete', topic: 'Batalha: Qual cozinha sua mãe prefere?', objective: 'Interação', done: false },
  { id: 9, week: 3, day: 'Sex', channel: Channel.WHATSAPP, format: 'Lista VIP', topic: 'Oferta Relâmpago Exclusiva', objective: 'Fidelização', done: false },
  // Semana 4
  { id: 10, week: 4, day: 'Ter', channel: Channel.INSTAGRAM, format: 'Reels', topic: 'Review: Potência Cx de Som', objective: 'Autoridade', done: false },
  { id: 11, week: 4, day: 'Qui', channel: Channel.GOOGLE, format: 'Texto', topic: 'Responder avaliações antigas', objective: 'Nota 4.8', done: false },
  { id: 12, week: 4, day: 'Sáb', channel: Channel.INSTAGRAM, format: 'Vídeo', topic: 'Chamada Saldão Fim de Mês', objective: 'Limpar estoque', done: false },
];

const ContentCalendar: React.FC = () => {
  const [items, setItems] = useState<CalendarItem[]>(initialData);

  const toggleDone = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const getIcon = (channel: Channel) => {
    switch (channel) {
      case Channel.INSTAGRAM: return <Instagram className="w-4 h-4 text-purple-600" />;
      case Channel.WHATSAPP: return <Smartphone className="w-4 h-4 text-green-600" />;
      case Channel.GOOGLE: return <Map className="w-4 h-4 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Calendário Editorial: Consolidação</h2>
        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">3 Meses</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Semana/Dia</th>
              <th className="p-4 font-semibold">Canal</th>
              <th className="p-4 font-semibold">Pauta (Tema)</th>
              <th className="p-4 font-semibold hidden md:table-cell">Formato</th>
              <th className="p-4 font-semibold hidden md:table-cell">Objetivo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {items.map((item) => (
              <tr key={item.id} className={`hover:bg-gray-50 transition-colors ${item.done ? 'bg-gray-50/50 opacity-70' : ''}`}>
                <td className="p-4">
                  <button 
                    onClick={() => toggleDone(item.id)}
                    className="focus:outline-none"
                  >
                    {item.done ? 
                      <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                      <Circle className="w-5 h-5 text-gray-300 hover:text-mm-blue" />
                    }
                  </button>
                </td>
                <td className="p-4 font-medium text-gray-700">
                  <span className="block text-xs text-gray-400 uppercase">Semana {item.week}</span>
                  {item.day}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {getIcon(item.channel)}
                    <span className="hidden sm:inline">{item.channel}</span>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-800">{item.topic}</td>
                <td className="p-4 text-gray-600 hidden md:table-cell">{item.format}</td>
                <td className="p-4 text-gray-600 hidden md:table-cell">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs border border-gray-200">
                    {item.objective}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentCalendar;
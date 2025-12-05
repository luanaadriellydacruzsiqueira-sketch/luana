import React from 'react';
import { Target, Users, MapPin, Zap, CreditCard, Smile, Home } from 'lucide-react';
import { Pillar } from '../types';

const StrategyOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Context */}
      <div className="bg-gradient-to-r from-mm-blue to-blue-800 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <MapPin className="text-mm-yellow" /> Lojas MM Assis Chateaubriand
        </h2>
        <p className="opacity-90 max-w-2xl">
          Projeto de Gestão Comercial focado na geração de tráfego Omnichannel e consolidação de vendas trimestrais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Persona Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-mm-yellow">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-mm-blue w-8 h-8" />
            <h3 className="text-xl font-bold text-gray-800">Persona: Família Chateaubriandense</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-semibold text-mm-blue">Perfil:</span>
              Moradores locais (urbano/rural), classe C/D, 25-55 anos.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-mm-blue">Comportamento:</span>
              Valorizam "olho no olho" e parcelas baixas ("Carnê MM").
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold text-mm-blue">Objetivo:</span>
              Tráfego para loja física (Av. Tupãssi) e WhatsApp.
            </li>
          </ul>
        </div>

        {/* Tone of Voice */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-mm-blue">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-mm-yellow w-8 h-8" />
            <h3 className="text-xl font-bold text-gray-800">Tom de Voz & Marca</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <span className="block text-2xl mb-1">🤝</span>
              <span className="font-bold text-sm">Próximo</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <span className="block text-2xl mb-1">⚡</span>
              <span className="font-bold text-sm">Energético</span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <span className="block text-2xl mb-1">🛡️</span>
              <span className="font-bold text-sm">Confiável</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">
            "Não buscamos métricas de vaidade, mas engajamento que vende."
          </p>
        </div>
      </div>

      {/* Pillars */}
      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Pilares de Conteúdo</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <Zap className="text-red-500" />
            <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">40%</span>
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Oportunidade Real</h4>
          <p className="text-sm text-gray-600">Produto e Preço. Foco na "parcelinha" e condição de pagamento.</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <CreditCard className="text-green-500" />
            <span className="text-xs font-bold bg-green-100 text-green-600 px-2 py-1 rounded">20%</span>
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Facilidade & Crédito</h4>
          <p className="text-sm text-gray-600">Educação sobre o Carnê MM, limites e aprovação.</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <Smile className="text-orange-500" />
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded">30%</span>
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Bastidores & Gente</h4>
          <p className="text-sm text-gray-600">Humanização, equipe, montagem e o mascote Xicória.</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <Home className="text-blue-500" />
            <span className="text-xs font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">10%</span>
          </div>
          <h4 className="font-bold text-gray-800 mb-2">Utilidade do Lar</h4>
          <p className="text-sm text-gray-600">Dicas de uso, limpeza e escolha de produtos.</p>
        </div>
      </div>
    </div>
  );
};

export default StrategyOverview;
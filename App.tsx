import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Compass, PenTool, Menu, X, ShoppingBag } from 'lucide-react';
import StrategyOverview from './components/StrategyOverview';
import ContentCalendar from './components/ContentCalendar';
import Dashboard from './components/Dashboard';
import AIContentGenerator from './components/AIContentGenerator';

const NavLink: React.FC<{ to: string; icon: React.FC<any>; label: string; active: boolean; onClick?: () => void }> = ({ to, icon: Icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      active 
        ? 'bg-mm-blue text-white shadow-md' 
        : 'text-gray-600 hover:bg-blue-50 hover:text-mm-blue'
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-mm-yellow' : ''}`} />
    <span className="font-medium">{label}</span>
  </Link>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-mm-blue rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              MM
            </div>
            <div>
              <h1 className="font-bold text-gray-800 leading-tight">Gestão Digital</h1>
              <p className="text-xs text-gray-500">Assis Chateaubriand</p>
            </div>
            <button className="ml-auto lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <NavLink to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} onClick={() => setSidebarOpen(false)} />
            <NavLink to="/strategy" icon={Compass} label="Estratégia" active={location.pathname === '/strategy'} onClick={() => setSidebarOpen(false)} />
            <NavLink to="/calendar" icon={CalendarDays} label="Calendário" active={location.pathname === '/calendar'} onClick={() => setSidebarOpen(false)} />
            <NavLink to="/generator" icon={PenTool} label="Criador IA" active={location.pathname === '/generator'} onClick={() => setSidebarOpen(false)} />
          </nav>

          <div className="p-4 border-t border-gray-100">
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-mm-blue font-bold">
                 <ShoppingBag className="w-4 h-4" />
                 <span>Meta Trimestral</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2.5 mb-2">
                <div className="bg-mm-blue h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-gray-600 flex justify-between">
                <span>Progresso</span>
                <span className="font-bold">45%</span>
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto h-screen">
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between lg:hidden sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <span className="font-bold text-gray-800">MM Assis</span>
          </div>
        </header>

        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/strategy" element={<StrategyOverview />} />
            <Route path="/calendar" element={<ContentCalendar />} />
            <Route path="/generator" element={<AIContentGenerator />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
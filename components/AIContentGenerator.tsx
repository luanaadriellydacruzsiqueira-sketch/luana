import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';
import { Pillar, Channel, GeneratedContent } from '../types';
import { Wand2, Loader2, Copy, Check } from 'lucide-react';

const AIContentGenerator: React.FC = () => {
  const [pillar, setPillar] = useState<Pillar>(Pillar.OPORTUNIDADE);
  const [channel, setChannel] = useState<Channel>(Channel.INSTAGRAM);
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedContent | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const content = await generateMarketingContent(pillar, product, channel);
      setResult(content);
    } catch (err: any) {
      setError(err.message || "Erro ao gerar conteúdo. Verifique sua API Key.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      const text = `${result.caption}\n\n${result.hashtags.map(h => `#${h}`).join(' ')}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex items-center gap-2 mb-6 text-mm-blue">
          <Wand2 className="w-6 h-6" />
          <h2 className="text-xl font-bold">Gerador de Conteúdo IA</h2>
        </div>
        
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pilar de Conteúdo</label>
            <select 
              value={pillar} 
              onChange={(e) => setPillar(e.target.value as Pillar)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mm-blue focus:border-mm-blue outline-none"
            >
              {Object.values(Pillar).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Canal de Destino</label>
            <select 
              value={channel} 
              onChange={(e) => setChannel(e.target.value as Channel)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mm-blue focus:border-mm-blue outline-none"
            >
              {Object.values(Channel).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Produto ou Tópico
              <span className="text-xs text-gray-500 font-normal ml-2">(Ex: Geladeira Panasonic, Bom dia da Equipe, Dica de limpeza)</span>
            </label>
            <input 
              type="text" 
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Digite o foco do post..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mm-blue focus:border-mm-blue outline-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || !product}
            className="w-full bg-mm-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Gerar Ideia'}
          </button>
          
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>

      {/* Result Display */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col h-full">
        {result ? (
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">Resultado Sugerido:</h3>
              <button 
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-mm-blue transition-colors p-2"
                title="Copiar texto"
              >
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-grow mb-4 overflow-y-auto max-h-[400px]">
              <p className="whitespace-pre-wrap text-gray-800 mb-4">{result.caption}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {result.hashtags.map((tag, i) => (
                  <span key={i} className="text-blue-600 text-sm font-medium">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-mm-yellow p-4 rounded-r-lg">
              <p className="text-sm text-yellow-800">
                <strong>💡 Dica Visual:</strong> {result.tips}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <Wand2 className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-center">Preencha o formulário para gerar <br/>legendas, scripts e ideias com IA.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIContentGenerator;
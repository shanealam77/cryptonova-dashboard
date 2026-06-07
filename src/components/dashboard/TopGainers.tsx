import { topGainers } from '../../data/mockData';
import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function TopGainers() {
  return (
    <div className="lg:col-span-1 bg-tech-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-tech-blue" />
          Top Gainers
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {topGainers.map((coin, i) => (
          <motion.div 
            key={coin.id} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            className="flex items-center justify-between p-3.5 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tech-800 flex items-center justify-center text-sm font-bold text-white shadow-inner group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-shadow">
                {coin.symbol.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors tracking-tight">{coin.name}</h4>
                <span className="text-xs text-slate-500 font-mono tracking-wider">{coin.symbol}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-semibold text-white font-mono tracking-tight">{coin.price}</div>
              <div className={`text-xs font-medium ${coin.isPositive ? 'text-emerald-400' : 'text-rose-400'} flex items-center justify-end gap-1 mt-0.5`}>
                {coin.isPositive ? '+' : ''}{coin.change24h}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

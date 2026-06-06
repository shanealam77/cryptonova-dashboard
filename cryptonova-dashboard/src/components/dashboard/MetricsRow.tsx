import { motion } from 'motion/react';
import { metrics } from '../../data/mockData';

export function MetricsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map((metric, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-tech-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:bg-tech-900 hover:border-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg"
        >
          {/* subtle background glow */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-tech-blue/5 rounded-full blur-2xl group-hover:bg-tech-blue/10 transition-colors duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="text-sm font-medium text-slate-400">{metric.label}</span>
            <div className="p-2 bg-white/5 rounded-lg text-slate-400 group-hover:text-tech-blue group-hover:bg-tech-blue/10 transition-colors duration-300 shadow-sm">
              <metric.icon className="w-4 h-4" />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white font-mono tracking-tight mb-2">{metric.value}</h3>
            <div className="flex items-center text-xs font-medium">
              <span className={`${metric.isPositive ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'} flex items-center px-2 py-0.5 rounded-full`}>
                {metric.isPositive ? '+' : ''}{metric.change}
              </span>
              <span className="text-slate-500 ml-2">vs last period</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

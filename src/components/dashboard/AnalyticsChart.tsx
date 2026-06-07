import { MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export function AnalyticsChart() {
  return (
    <div className="lg:col-span-2 bg-tech-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-lg relative overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-6 z-10">
        <div>
          <h2 className="text-lg font-semibold text-white tracking-tight">Portfolio Performance</h2>
          <p className="text-sm text-slate-500 mt-0.5">Jan 01 - Jun 06, 2026</p>
        </div>
        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Background grid lines overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-end pb-8 px-6">
        <div className="border-t border-white/5 w-full h-[15%]"></div>
        <div className="border-t border-white/5 w-full h-[15%]"></div>
        <div className="border-t border-white/5 w-full h-[15%]"></div>
        <div className="border-t border-white/5 w-full h-[15%]"></div>
        <div className="border-t border-b border-white/5 w-full h-[15%]"></div>
      </div>

      <div className="flex-1 flex items-end space-x-2 sm:space-x-4 h-64 mt-4 z-10">
        {/* CSS Mockup of a simple distribution/bar chart */}
        {[30, 45, 25, 60, 40, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full gap-2 group cursor-crosshair">
            <div className="w-full relative flex-1 flex items-end">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.05, type: 'spring', stiffness: 50 }}
                className={`w-full rounded-t-lg transition-colors duration-300 group-hover:bg-tech-neon shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] ${
                  i === 11 ? 'bg-tech-neon shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-tech-blue/20'
                }`}
                style={{ height: `${height}%` }}
              >
                {/* Tooltip mockup on hover */}
                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-tech-800 text-white text-xs py-1.5 px-2.5 rounded-lg font-mono shadow-xl transition-opacity pointer-events-none whitespace-nowrap z-20 border border-white/10">
                  ${(height * 1250).toLocaleString()}
                </div>
              </motion.div>
            </div>
            {/* Axis labels mock */}
            <div className="text-[10px] text-slate-500 text-center font-mono uppercase">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

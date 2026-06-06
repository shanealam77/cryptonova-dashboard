import { recentTransactions } from '../../data/mockData';
import { ArrowUpRight, ArrowDownLeft, RefreshCcw, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function TransactionsTable() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Buy': return <ArrowDownLeft className="w-4 h-4 text-emerald-400" />;
      case 'Sell': return <ArrowUpRight className="w-4 h-4 text-rose-400" />;
      case 'Transfer': return <RefreshCcw className="w-4 h-4 text-tech-blue" />;
      case 'Deposit': return <Download className="w-4 h-4 text-purple-400" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Pending': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Failed': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="bg-tech-900/50 backdrop-blur-sm border border-white/5 rounded-2xl shadow-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-tech-950/20">
        <h2 className="text-lg font-semibold text-white tracking-tight">Recent Transactions</h2>
        <button className="text-sm font-medium text-tech-blue hover:text-tech-neon transition-colors">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-tech-950/40 text-slate-400 border-b border-white/5 uppercase tracking-wider text-[11px] font-semibold">
            <tr>
              <th className="px-6 py-4">Asset</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-300 font-medium pb-2">
            {recentTransactions.map((tx, i) => (
              <motion.tr 
                key={tx.id} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                className="hover:bg-tech-800/40 transition-colors group cursor-default"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-tech-800 flex items-center justify-center text-sm font-bold text-white shadow-inner group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-shadow">
                      {tx.assetSymbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-200 group-hover:text-white transition-colors">{tx.assetName}</div>
                      <div className="text-xs text-slate-500 font-mono tracking-wider">{tx.assetSymbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-tech-950/50 shadow-inner">
                      {getIcon(tx.type)}
                    </div>
                    <span className="text-slate-300">{tx.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono">
                  {tx.type === 'Sell' || tx.type === 'Transfer' ? '-' : '+'}{tx.amount} {tx.assetSymbol}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(tx.status)}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-slate-500 text-xs">
                  {tx.timestamp}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

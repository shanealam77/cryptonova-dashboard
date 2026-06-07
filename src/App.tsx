import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MetricsRow } from './components/dashboard/MetricsRow';
import { AnalyticsChart } from './components/dashboard/AnalyticsChart';
import { TopGainers } from './components/dashboard/TopGainers';
import { TransactionsTable } from './components/dashboard/TransactionsTable';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-tech-950 font-sans text-slate-200 selection:bg-tech-blue/30 selection:text-white">
      {/* Sidebar - hidden on smaller devices, could add a drawer later */}
      <div className="hidden md:block h-full shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Layout Area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden min-w-0">
        <Header />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto space-y-6 lg:space-y-8 pb-12"
          >
            <MetricsRow />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnalyticsChart />
              <TopGainers />
            </div>
            
            <TransactionsTable />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

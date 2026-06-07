import { Search, Bell, ChevronDown, Wallet as WalletIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="h-20 px-6 md:px-8 flex items-center justify-between border-b border-white/5 bg-tech-950/80 backdrop-blur-md sticky top-0 z-30 shrink-0">
      <div className="flex-1 min-w-0 pr-4">
        <h1 className="text-xl font-semibold text-white tracking-tight truncate">Portfolio Overview</h1>
        <p className="text-xs text-slate-500 mt-0.5 truncate hidden sm:block">Welcome back, Alex. Your assets are up today.</p>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6 shrink-0">
        {/* Search */}
        <div className="relative group hidden lg:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-tech-blue transition-colors" />
          </div>
          <input
            type="text"
            className="bg-tech-900 border border-white/5 text-slate-300 text-sm rounded-xl focus:ring-1 focus:ring-tech-blue focus:border-tech-blue block w-64 xl:w-80 pl-10 p-2 transition-all outline-none placeholder:text-slate-600 shadow-inner"
            placeholder="Search assets, trades..."
          />
        </div>

        {/* Search Mobile Icon */}
        <button className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
          <Search className="w-5 h-5" />
        </button>

        {/* Notification */}
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-tech-blue rounded-full border-2 border-tech-950"></span>
        </button>

        {/* Connect Wallet Button */}
        <button className="hidden md:flex items-center gap-2 bg-tech-blue/10 border border-tech-blue/30 text-tech-blue hover:bg-tech-blue hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <WalletIcon className="w-4 h-4" />
          <span>Connect Wallet</span>
        </button>

        {/* Profile Dropdown */}
        <div className="flex items-center space-x-3 cursor-pointer pl-2 md:pl-4 md:border-l border-white/5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-tech-blue flex items-center justify-center border-2 border-tech-900 overflow-hidden shadow-[0_0_12px_rgba(59,130,246,0.3)] shrink-0">
             <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile avatar" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block text-sm">
            <p className="font-medium text-slate-200 group-hover:text-white transition-colors">Alex Morgan</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors hidden sm:block" />
        </div>
      </div>
    </header>
  );
}

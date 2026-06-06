import { LayoutDashboard, Wallet, BarChart3, Settings, LogOut, Hexagon } from 'lucide-react';
import type { NavigationItem } from '../../types';

const navItems: NavigationItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#', active: true },
  { name: 'Wallet', icon: Wallet, href: '#' },
  { name: 'Analytics', icon: BarChart3, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-tech-950 border-r border-white/5 flex flex-col h-full shrink-0">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0">
        <Hexagon className="w-7 h-7 text-tech-blue fill-tech-blue/20 shrink-0" />
        <span className="ml-3 font-semibold text-lg tracking-tight text-white">CryptoNova</span>
      </div>

      {/* Links */}
      <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
        <h3 className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Menu</h3>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              item.active
                ? 'bg-tech-blue/10 text-tech-blue'
                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
            }`}
          >
            <item.icon className={`w-5 h-5 mr-3 shrink-0 ${item.active ? 'text-tech-blue' : 'text-slate-500 group-hover:text-slate-300 transition-colors'}`} />
            <span className="font-medium text-sm">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/5 shrink-0">
        <button className="flex items-center w-full px-3 py-2.5 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group">
          <LogOut className="w-5 h-5 mr-3 shrink-0 text-slate-500 group-hover:text-red-400 transition-colors" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}

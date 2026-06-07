import { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  name: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export interface CoinCard {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change24h: string;
  isPositive: boolean;
}

export interface Transaction {
  id: string;
  assetName: string;
  assetSymbol: string;
  type: 'Buy' | 'Sell' | 'Transfer' | 'Deposit';
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
  timestamp: string;
}

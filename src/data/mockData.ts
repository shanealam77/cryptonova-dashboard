import { Wallet, Activity, ArrowRightLeft, Fuel } from 'lucide-react';
import type { Metric, CoinCard, Transaction } from '../types';

export const metrics: Metric[] = [
  {
    label: 'Total Balance',
    value: '$124,562.33',
    change: '4.25%',
    isPositive: true,
    icon: Wallet,
  },
  {
    label: '24h Profit/Loss',
    value: '$5,231.89',
    change: '5.12%',
    isPositive: true,
    icon: Activity,
  },
  {
    label: 'Active Trades',
    value: '14',
    change: '2',
    isPositive: true,
    icon: ArrowRightLeft,
  },
  {
    label: 'Gas Fees (Avg)',
    value: '$42.50',
    change: '12.4%',
    isPositive: false,
    icon: Fuel,
  },
];

export const topGainers: CoinCard[] = [
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    price: '$142.30',
    change24h: '12.4%',
    isPositive: true,
  },
  {
    id: 'avax',
    name: 'Avalanche',
    symbol: 'AVAX',
    price: '$34.12',
    change24h: '8.2%',
    isPositive: true,
  },
  {
    id: 'dot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: '$7.45',
    change24h: '5.1%',
    isPositive: true,
  },
  {
    id: 'link',
    name: 'Chainlink',
    symbol: 'LINK',
    price: '$18.90',
    change24h: '4.9%',
    isPositive: true,
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: 'tx-1',
    assetName: 'Bitcoin',
    assetSymbol: 'BTC',
    type: 'Buy',
    amount: '0.450',
    status: 'Completed',
    timestamp: '2 mins ago',
  },
  {
    id: 'tx-2',
    assetName: 'Ethereum',
    assetSymbol: 'ETH',
    type: 'Sell',
    amount: '2.500',
    status: 'Pending',
    timestamp: '45 mins ago',
  },
  {
    id: 'tx-3',
    assetName: 'Solana',
    assetSymbol: 'SOL',
    type: 'Transfer',
    amount: '150.00',
    status: 'Completed',
    timestamp: '3 hours ago',
  },
  {
    id: 'tx-4',
    assetName: 'USD Coin',
    assetSymbol: 'USDC',
    type: 'Deposit',
    amount: '5,000.00',
    status: 'Completed',
    timestamp: '1 day ago',
  },
];

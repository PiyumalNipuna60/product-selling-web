import React from 'react';
import { UsersIcon, ShoppingCartIcon, CreditCardIcon, TrendingUpIcon } from 'lucide-react';
const StatCard = ({
  icon: Icon,
  label,
  value,
  trend
}) => <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-blue-50 rounded-lg">
        <Icon size={24} className="text-blue-500" />
      </div>
    </div>
    <div className="flex items-center mt-4">
      <TrendingUpIcon size={16} className="text-green-500 mr-1" />
      <span className="text-sm text-green-500">{trend}</span>
    </div>
  </div>;
export const Dashboard = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={UsersIcon} label="Total Users" value="2,543" trend="+12.5% from last month" />
        <StatCard icon={ShoppingCartIcon} label="Total Orders" value="1,234" trend="+8.2% from last month" />
        <StatCard icon={CreditCardIcon} label="Revenue" value="$45,678" trend="+15.3% from last month" />
        <StatCard icon={TrendingUpIcon} label="Growth" value="23.5%" trend="+4.1% from last month" />
      </div>
    </div>;
};
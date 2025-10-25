"use client";
import React, { useState } from "react";
import {
  Home,
  Package,
  ShoppingCart,
  CreditCard,
  BarChart3,
  HelpCircle,
  Settings,
  LogOut,
  Search,
  Bell,
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const InventoryDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const sidebarItems = [
    { name: "Dashboard", icon: <Home className="w-5 h-5" />, active: true },
    { name: "Inventory", icon: <Package className="w-5 h-5" /> },
    { name: "Orders", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Purchase", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Reporting", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Support", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const statsCards = [
    {
      title: "Total Products",
      value: "5483",
      icon: <Package className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      title: "Orders",
      value: "2859",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Total Stock",
      value: "5483",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Out of Stock",
      value: "38",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  const expenseData = [
    { month: "Dec", expense: 25, profit: 20 },
    { month: "Jan", expense: 30, profit: 25 },
    { month: "Feb", expense: 28, profit: 22 },
    { month: "Mar", expense: 35, profit: 30 },
    { month: "April", expense: 32, profit: 28 },
    { month: "May", expense: 38, profit: 35 },
    { month: "Jun", expense: 40, profit: 38 },
  ];

  const inventoryData = [
    { name: "Sold units", value: 32, color: "#3B82F6" },
    { name: "Total units", value: 68, color: "#64748B" },
  ];

  const topStores = [
    { name: "Gateway Inc", percentage: 87.8, color: "bg-blue-500" },
    { name: "The Rustic Fox", percentage: 72.5, color: "bg-blue-500" },
    { name: "Vivad Vape", percentage: 68.6, color: "bg-gray-400" },
    { name: "Blue Harbor", percentage: 56.4, color: "bg-gray-400" },
    { name: "Nebula Novelties", percentage: 39.4, color: "bg-gray-400" },
    { name: "Cementum Cements", percentage: 34.6, color: "bg-gray-400" },
    { name: "Pure Treasures", percentage: 27.6, color: "bg-gray-400" },
    { name: "Whimsy Wild", percentage: 23.3, color: "bg-gray-400" },
    { name: "Mercantile", percentage: 13.1, color: "bg-gray-400" },
    { name: "Funkyland", percentage: 7.8, color: "bg-gray-400" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 text-white flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">NP</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">Nirmal Kumar P</h3>
              <p className="text-xs text-slate-400">nirmalx@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                activeSection === item.name
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white cursor-pointer transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Inventory Management
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bell className="w-4 h-4 text-blue-600" />
                </div>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Overview Cards */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Over View
            </h2>
            <div className="grid grid-cols-4 gap-6">
              {statsCards.map((card, index) => (
                <div key={index} className={`${card.bgColor} p-6 rounded-xl`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-800">
                        {card.value}
                      </p>
                    </div>
                    <div className={`${card.iconBg} p-3 rounded-lg`}>
                      {card.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* No of Users */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">No of users</h3>
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-800 mb-1">583 K</p>
                <p className="text-sm text-gray-500">Total Customers</p>
              </div>
            </div>

            {/* Inventory Values */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">
                Inventory Values
              </h3>
              <div className="flex items-center justify-center mb-4">
                <PieChart width={120} height={120}>
                  <Pie
                    data={inventoryData}
                    cx={60}
                    cy={60}
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                  >
                    {inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-sm text-gray-600">Sold units</span>
                  </div>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded"></div>
                    <span className="text-sm text-gray-600">Total units</span>
                  </div>
                  <span className="text-sm font-medium">68%</span>
                </div>
              </div>
            </div>

            {/* Top 10 Stores */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">
                Top 10 Stores by sales
              </h3>
              <div className="space-y-3">
                {topStores.slice(0, 8).map((store, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-700 truncate flex-1 mr-3">
                      {store.name}
                    </span>
                    <div className="flex items-center space-x-2 w-20">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${store.color} rounded-full`}
                          style={{ width: `${store.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-8">
                        {store.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expense vs Profit Chart */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-800">Expense vs Profit</h3>
              <span className="text-sm text-gray-500">Last 6 months</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={expenseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#666" }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#ff6b35"
                    strokeWidth={2}
                    dot={{ fill: "#ff6b35", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;

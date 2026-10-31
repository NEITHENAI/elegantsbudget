import React, { useState } from 'react';
import { 
  REVENUE_STREAMS, 
  EXPENDITURE_PROGRAMS, 
  BUDGET_METADATA 
} from '../data/budgetData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart as PieIcon, 
  Info, 
  MessageSquare, 
  ShieldAlert 
} from 'lucide-react';

export default function BudgetOverview({ onGoToConsultation }) {
  const [activeDimension, setActiveDimension] = useState('expenditure'); // 'expenditure' or 'revenue'
  const [chartType, setChartType] = useState('bar'); // 'bar' or 'pie'

  const isExpenditure = activeDimension === 'expenditure';
  const dataList = isExpenditure ? EXPENDITURE_PROGRAMS : REVENUE_STREAMS;
  const totalAmount = isExpenditure ? BUDGET_METADATA.expenditureTn : BUDGET_METADATA.domesticRevenueTn;

  const chartData = dataList.map(item => ({
    name: item.name.length > 22 ? item.name.substring(0, 20) + '...' : item.name,
    fullName: item.name,
    amountTn: item.amountTn,
    amountBn: item.amountBn,
    sharePercent: item.sharePercent,
    color: item.color
  }));

  // Clean, high-contrast readable tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-xl text-white text-xs max-w-xs z-50">
          <p className="font-bold text-white text-xs leading-snug">{data.fullName}</p>
          <div className="flex items-center space-x-2 pt-1.5">
            <span 
              className="w-2.5 h-2.5 rounded-full shrink-0" 
              style={{ backgroundColor: data.color }} 
            />
            <span className="font-bold text-amber-400">
              UGX {data.amountTn.toFixed(2)} Trillion
            </span>
            <span className="text-slate-300 font-medium">
              ({data.sharePercent}%)
            </span>
          </div>
          <p className="text-[11px] text-slate-400 pt-0.5">
            {data.amountBn.toLocaleString()} Billion UGX
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      
      {/* Dimension Switcher (Expenditure vs. Revenue) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-sm font-bold text-slate-800">
            National Fiscal Allocation Explorer
          </h2>
          <p className="text-xs text-slate-500">
            Toggle between planned expenditure priorities and domestic revenue projections
          </p>
        </div>

        {/* Big Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveDimension('expenditure')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              isExpenditure
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
            <span>Expenditure (UGX 80.0T)</span>
          </button>

          <button
            onClick={() => setActiveDimension('revenue')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              !isExpenditure
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-blue-200" />
            <span>Revenue (UGX 50.0T)</span>
          </button>
        </div>
      </div>

      {/* Analytical Visualizer Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <span>{isExpenditure ? 'Expenditure Program Allocations' : 'Revenue Resource Envelopes'}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                UGX {totalAmount.toFixed(1)} Trillion
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isExpenditure 
                ? 'Statutory debt repayment and public investment program shares for FY 2027/28'
                : 'Projected tax collections, oil revenues, and external concessional grant support'}
            </p>
          </div>

          {/* Chart View Toggle (Bar vs. Pie) */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setChartType('bar')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                chartType === 'bar' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
              <span>Bar Chart</span>
            </button>
            <button
              onClick={() => setChartType('pie')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                chartType === 'pie' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <PieIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>Pie Chart</span>
            </button>
          </div>
        </div>

        {/* Visual Chart Canvas */}
        <div className="mt-6 h-72 sm:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 40 }}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11, fill: '#64748b' }} 
                  interval={0}
                  angle={-20}
                  textAnchor="end"
                />
                <YAxis 
                  tick={{ fontSize: 11, fill: '#64748b' }} 
                  unit="T"
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="amountTn" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={95}
                  innerRadius={55}
                  paddingAngle={2}
                  dataKey="amountTn"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-pie-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Program / Stream Ledger Cards (No specific react buttons) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {isExpenditure ? 'Detailed Expenditure Programs' : 'Detailed Revenue Inflow Streams'}
          </h3>
          <span className="text-xs text-slate-400">
            {dataList.length} Categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {dataList.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: item.color }} 
                    />
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 shrink-0">
                    {item.sharePercent}%
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">Allocation: </span>
                  <span className="font-bold text-slate-900">
                    UGX {item.amountTn.toFixed(2)} Trillion
                  </span>
                </div>
                <div className="text-slate-500">
                  ({item.amountBn.toLocaleString()} Bn)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom General Callout to Consultation */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-900">
              Submit Your General Reaction on the Budget
            </h4>
            <p className="text-xs text-blue-700 mt-0.5">
              Citizens and stakeholders are invited to give their thoughts on whether the UGX 80.0T budget meets national needs.
            </p>
          </div>
        </div>

        <button
          onClick={onGoToConsultation}
          className="shrink-0 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
        >
          Go to Consultation &rarr;
        </button>
      </div>

    </div>
  );
}

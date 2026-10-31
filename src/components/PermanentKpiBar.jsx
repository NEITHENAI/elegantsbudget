import React from 'react';
import { BUDGET_METADATA } from '../data/budgetData';
import { Wallet, TrendingUp, AlertCircle, ArrowUpRight, MessageSquareText } from 'lucide-react';

export default function PermanentKpiBar({ responsesCount, onGoToConsultation }) {
  return (
    <div className="bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          
          {/* Total Budget Envelope */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider">Total Envelope</span>
              <Wallet className="w-4 h-4 text-slate-700" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900">
              UGX {BUDGET_METADATA.totalEnvelopeTn.toFixed(2)}T
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              80,000 Billion UGX
            </div>
          </div>

          {/* Revenue */}
          <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-200">
            <div className="flex items-center justify-between text-blue-700 mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider">Projected Revenue</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-blue-900">
              UGX {BUDGET_METADATA.domesticRevenueTn.toFixed(2)}T
            </div>
            <div className="text-[11px] text-blue-700 font-medium mt-0.5">
              {BUDGET_METADATA.revenueShare}% of Budget
            </div>
          </div>

          {/* Planned Expenditure */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-slate-500 mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider">Total Expenditure</span>
              <ArrowUpRight className="w-4 h-4 text-slate-700" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-slate-900">
              UGX {BUDGET_METADATA.expenditureTn.toFixed(2)}T
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              100% Program Allocation
            </div>
          </div>

          {/* Financing Deficit Gap */}
          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
            <div className="flex items-center justify-between text-amber-800 mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider">Financing Gap</span>
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-amber-900">
              UGX {BUDGET_METADATA.financingGapTn.toFixed(2)}T
            </div>
            <div className="text-[11px] text-amber-800 font-medium mt-0.5">
              {BUDGET_METADATA.deficitRatio}% Deficit (Borrowing)
            </div>
          </div>

          {/* Citizen Consultation Counter */}
          <div 
            onClick={onGoToConsultation}
            className="col-span-2 md:col-span-1 p-3 rounded-xl bg-indigo-50/50 border border-indigo-200 cursor-pointer hover:bg-indigo-100/50 transition-colors"
          >
            <div className="flex items-center justify-between text-indigo-700 mb-1">
              <span className="text-[11px] font-medium uppercase tracking-wider">Public Evidence</span>
              <MessageSquareText className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-indigo-900">
              {responsesCount}
            </div>
            <div className="text-[11px] text-indigo-700 mt-0.5 font-medium">
              Citizen Submissions &rarr;
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

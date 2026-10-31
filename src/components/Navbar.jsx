import React, { useState } from 'react';
import { Users, BarChart3, MessageSquare, X, ChevronDown, CheckCircle } from 'lucide-react';
import { GROUP_MEMBERS } from '../data/budgetData';

export default function Navbar({ currentTab, setCurrentTab, responsesCount }) {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Logo & Project Title */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-inner">
              UG
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Republic of Uganda
                </span>
                <span className="text-xs text-slate-400">| FY 2027/28</span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                National Budget Framework (UGX 80.00 Trillion)
              </h1>
            </div>
          </div>

          {/* Navigation & Group Members Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Tabs */}
            <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setCurrentTab('budget')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  currentTab === 'budget'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Budget Explorer</span>
              </button>

              <button
                onClick={() => setCurrentTab('consultation')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  currentTab === 'consultation'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Consultation</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-blue-500/30 text-blue-200">
                  {responsesCount}
                </span>
              </button>
            </div>

            {/* Group Members Button */}
            <button
              onClick={() => setShowMembers(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Group Members</span>
              <span className="sm:hidden">Members</span>
              <span className="px-1.5 py-0.2 rounded-full bg-slate-700 text-[10px]">
                {GROUP_MEMBERS.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Group Members Modal */}
      {showMembers && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-slate-900">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Project Group Members</h3>
                  <p className="text-xs text-slate-500">Uganda National Budget FY 2027/28</p>
                </div>
              </div>
              <button
                onClick={() => setShowMembers(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {GROUP_MEMBERS.map((memberName, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {memberName}
                    </span>
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowMembers(false)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

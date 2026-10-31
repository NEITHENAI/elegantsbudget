import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  X, 
  CheckCircle, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { GROUP_MEMBERS } from '../data/budgetData';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  responsesCount, 
  isAdmin, 
  setIsAdmin 
}) {
  const [showMembers, setShowMembers] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleMemberClick = (memberName) => {
    // Secret Admin Trigger on Akot Joyce
    if (memberName.toLowerCase().includes('akot joyce')) {
      if (isAdmin) {
        setIsAdmin(false);
      } else {
        setShowPasswordModal(true);
        setPasswordError(false);
        setPasswordInput('');
      }
    }
  };

  const handleVerifyPassword = (e) => {
    e.preventDefault();
    if (passwordInput === 'Hudsonhornet1$') {
      setIsAdmin(true);
      setShowPasswordModal(false);
      setPasswordError(false);
      setPasswordInput('');
    } else {
      setPasswordError(true);
    }
  };

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
                {isAdmin && (
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Admin Mode</span>
                  </span>
                )}
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
              {GROUP_MEMBERS.map((memberName, idx) => {
                const isAkot = memberName.toLowerCase().includes('akot joyce');
                return (
                  <div
                    key={idx}
                    onClick={() => handleMemberClick(memberName)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                      isAkot 
                        ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 cursor-pointer' 
                        : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {memberName}
                      </span>
                    </div>

                    {isAkot && isAdmin ? (
                      <span className="flex items-center space-x-1 text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Admin</span>
                      </span>
                    ) : (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
              {isAdmin ? (
                <button
                  onClick={() => setIsAdmin(false)}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
                >
                  Exit Admin Mode
                </button>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Fiscal Policy Working Group
                </span>
              )}
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

      {/* Secret Password Modal for Akot Joyce */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-slate-900 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Moderator Access</h4>
                  <p className="text-[11px] text-slate-500">Akot Joyce Verification</p>
                </div>
              </div>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleVerifyPassword} className="mt-4 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enter Admin Passcode
                </label>
                <input
                  type="password"
                  autoFocus
                  required
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Enter passcode..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 bg-white"
                />
                {passwordError && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Incorrect passcode. Please try again.</span>
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-xs"
                >
                  Unlock Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </header>
  );
}

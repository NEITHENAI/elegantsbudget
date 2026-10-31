import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PermanentKpiBar from './components/PermanentKpiBar';
import BudgetOverview from './components/BudgetOverview';
import GeneralConsultationSection from './components/GeneralConsultationSection';
import { GROUP_MEMBERS, INITIAL_CITIZEN_RESPONSES, BUDGET_METADATA } from './data/budgetData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('budget'); // 'budget' or 'consultation'

  // Responses state persisted in localStorage
  const [responses, setResponses] = useState(() => {
    try {
      const saved = localStorage.getItem('UGANDA_BUDGET_GROUP_80T_RESPONSES');
      return saved ? JSON.parse(saved) : INITIAL_CITIZEN_RESPONSES;
    } catch {
      return INITIAL_CITIZEN_RESPONSES;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('UGANDA_BUDGET_GROUP_80T_RESPONSES', JSON.stringify(responses));
    } catch (e) {
      console.error('Error saving responses:', e);
    }
  }, [responses]);

  const handleAddResponse = (newResponse) => {
    setResponses(prev => [newResponse, ...prev]);
  };

  const handleDeleteResponse = (id) => {
    setResponses(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <Navbar 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          responsesCount={responses.length}
        />

        <PermanentKpiBar 
          responsesCount={responses.length}
          onGoToConsultation={() => setCurrentTab('consultation')}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {currentTab === 'budget' ? (
            <BudgetOverview 
              onGoToConsultation={() => setCurrentTab('consultation')}
            />
          ) : (
            <GeneralConsultationSection 
              responses={responses}
              onAddResponse={handleAddResponse}
              onDeleteResponse={handleDeleteResponse}
            />
          )}
        </main>
      </div>

      {/* Standard Academic Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-800">
                Republic of Uganda - National Budget Framework (FY 2027/2028)
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Macroeconomic Policy Project | Total Fiscal Envelope: UGX {BUDGET_METADATA.totalEnvelopeTn.toFixed(2)} Trillion
              </p>
            </div>

            <div className="text-center md:text-right">
              <span className="font-semibold text-slate-700">Project Members: </span>
              <span className="text-slate-600">
                {GROUP_MEMBERS.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

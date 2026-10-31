import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PermanentKpiBar from './components/PermanentKpiBar';
import BudgetOverview from './components/BudgetOverview';
import GeneralConsultationSection from './components/GeneralConsultationSection';
import { GROUP_MEMBERS, INITIAL_CITIZEN_RESPONSES, BUDGET_METADATA } from './data/budgetData';
import { db } from './firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

export default function App() {
  const [currentTab, setCurrentTab] = useState('budget'); // 'budget' or 'consultation'

  // Responses state (seeds 10 natural responses, synchronizes with Firestore)
  const [responses, setResponses] = useState(() => {
    try {
      const saved = localStorage.getItem('UGANDA_BUDGET_GROUP_80T_RESPONSES');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return INITIAL_CITIZEN_RESPONSES;
    } catch {
      return INITIAL_CITIZEN_RESPONSES;
    }
  });

  // Real-time synchronization with separate Firestore collection: 'group2_responses'
  useEffect(() => {
    let unsubscribe;
    try {
      const group2Col = collection(db, 'group2_responses');
      unsubscribe = onSnapshot(group2Col, (snapshot) => {
        if (!snapshot.empty) {
          const remoteList = snapshot.docs.map(d => ({
            id: d.id,
            ...d.data()
          }));
          // Sort newest first
          remoteList.sort((a, b) => (b.timestamp || '').localeCompare(a.timestamp || ''));
          setResponses(remoteList);
          try {
            localStorage.setItem('UGANDA_BUDGET_GROUP_80T_RESPONSES', JSON.stringify(remoteList));
          } catch (e) {
            console.error('Cache save error:', e);
          }
        } else {
          // If Firestore collection is empty, seed it with the 10 natural responses
          INITIAL_CITIZEN_RESPONSES.forEach((item) => {
            setDoc(doc(db, 'group2_responses', item.id), item).catch(() => {});
          });
        }
      }, (err) => {
        console.warn('Firestore live listener notice (using local storage fallback):', err.message);
      });
    } catch (err) {
      console.warn('Firestore init notice:', err);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Save to localStorage as offline fail-safe
  useEffect(() => {
    try {
      localStorage.setItem('UGANDA_BUDGET_GROUP_80T_RESPONSES', JSON.stringify(responses));
    } catch (e) {
      console.error('Error saving responses:', e);
    }
  }, [responses]);

  const handleAddResponse = async (newResponse) => {
    // 1. Immediately update local UI
    setResponses(prev => [newResponse, ...prev.filter(r => r.id !== newResponse.id)]);

    // 2. Persist to Firestore in separate 'group2_responses' collection
    try {
      await setDoc(doc(db, 'group2_responses', newResponse.id), newResponse);
    } catch (err) {
      console.warn('Could not write to Firestore (saved locally in browser):', err.message);
    }
  };

  const handleDeleteResponse = async (id) => {
    // 1. Immediately remove from local state
    setResponses(prev => prev.filter(r => r.id !== id));

    // 2. Delete from Firestore
    try {
      await deleteDoc(doc(db, 'group2_responses', id));
    } catch (err) {
      console.warn('Could not delete from Firestore:', err.message);
    }
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

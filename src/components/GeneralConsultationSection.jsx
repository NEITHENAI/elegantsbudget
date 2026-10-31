import React, { useState } from 'react';
import { 
  MessageSquarePlus, 
  Send, 
  CheckCircle2, 
  Download, 
  Trash2, 
  Filter, 
  Search, 
  User, 
  Clock, 
  ThumbsUp, 
  AlertTriangle 
} from 'lucide-react';

export default function GeneralConsultationSection({ 
  responses, 
  onAddResponse, 
  onDeleteResponse 
}) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Citizen / Taxpayer');
  const [stance, setStance] = useState('Generally Supportive of Priorities');
  const [comment, setComment] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  // Search and filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStanceFilter, setSelectedStanceFilter] = useState('ALL');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newReaction = {
      id: `resp_${Date.now()}`,
      name: name.trim(),
      category: category,
      stance: stance,
      comment: comment.trim(),
      timestamp: dateStr
    };

    onAddResponse(newReaction);
    setSubmittedFeedback(true);
    setName('');
    setComment('');

    setTimeout(() => {
      setSubmittedFeedback(false);
    }, 2500);
  };

  // Filtered responses
  const filteredResponses = responses.filter(r => {
    const matchesSearch = 
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStance = selectedStanceFilter === 'ALL' || r.stance === selectedStanceFilter;
    return matchesSearch && matchesStance;
  });

  // Download CSV
  const handleDownloadCsv = () => {
    if (responses.length === 0) return;
    const headers = ['ID', 'Name', 'Category', 'Stance', 'Comment', 'Timestamp'];
    const rows = responses.map(r => [
      r.id,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.category}"`,
      `"${r.stance}"`,
      `"${r.comment.replace(/"/g, '""')}"`,
      r.timestamp
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'UGANDA_BUDGET_2028_CONSULTATION_EVIDENCE.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Title & Introduction */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <MessageSquarePlus className="w-5 h-5 text-blue-600" />
              <span>Public Consultation & Citizen Evidence Ledger</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              General feedback portal for citizens, students, and civil society on the UGX 80.0T budget draft
            </p>
          </div>

          {responses.length > 0 && (
            <button
              onClick={handleDownloadCsv}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Export CSV</span>
            </button>
          )}
        </div>

        {/* Form to submit general reaction */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Stakeholder Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
              >
                <option value="Citizen / Taxpayer">Citizen / Taxpayer</option>
                <option value="University Student">University Student</option>
                <option value="Business Owner / Trader">Business Owner / Trader</option>
                <option value="Civil Society / NGO">Civil Society / NGO</option>
                <option value="Farmer / Agro-producer">Farmer / Agro-producer</option>
                <option value="Civil Servant">Civil Servant</option>
              </select>
            </div>

            {/* General Stance */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Budget Stance
              </label>
              <select
                value={stance}
                onChange={(e) => setStance(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
              >
                <option value="Generally Supportive of Priorities">Generally Supportive of Priorities</option>
                <option value="Too High Debt Burden (30% Repayment)">Too High Debt Burden (30% Repayment)</option>
                <option value="Needs More Health & Education">Needs More Health & Education</option>
                <option value="Taxes Are Too High (VAT/Excise)">Taxes Are Too High (VAT/Excise)</option>
                <option value="Agro-industrialization Underfunded">Agro-industrialization Underfunded</option>
              </select>
            </div>
          </div>

          {/* Comment / Remarks */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              General Feedback / Perspective <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Provide your thoughts on the UGX 80.0T budget priorities, debt sustainability, or revenue measures..."
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            {submittedFeedback ? (
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Thank you! Your feedback has been recorded in the evidence ledger.</span>
              </div>
            ) : (
              <span className="text-[11px] text-slate-400">
                All submissions appear permanently in the project evidence ledger.
              </span>
            )}

            <button
              type="submit"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </form>
      </div>

      {/* Ledger Header & Search Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-bold text-slate-900">
              Submitted Consultation Responses
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs">
              {responses.length} Total
            </span>
          </div>

          {/* Search bar & filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search citizen or text..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 w-full sm:w-48"
              />
            </div>

            <select
              value={selectedStanceFilter}
              onChange={(e) => setSelectedStanceFilter(e.target.value)}
              className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-600 bg-white"
            >
              <option value="ALL">All Stances</option>
              <option value="Generally Supportive of Priorities">Supportive</option>
              <option value="Too High Debt Burden (30% Repayment)">Debt Concern</option>
              <option value="Needs More Health & Education">More Social Spend</option>
              <option value="Taxes Are Too High (VAT/Excise)">Tax Concern</option>
              <option value="Agro-industrialization Underfunded">Agro Underfunded</option>
            </select>
          </div>
        </div>

        {/* Responses Cards */}
        {filteredResponses.length === 0 ? (
          <div className="py-12 text-center text-slate-400 border border-dashed border-slate-200 rounded-xl">
            <MessageSquarePlus className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-semibold text-slate-600">No responses recorded yet</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Fill out the form above to record citizen feedback for the project evidence.
            </p>
          </div>
        ) : (
          <div className="space-y-3 pt-2">
            {filteredResponses.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900">{item.name}</span>
                        <span className="text-[11px] text-slate-500 ml-2">({item.category})</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">
                        {item.stance}
                      </span>
                      <button
                        onClick={() => onDeleteResponse(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50 transition-colors"
                        title="Delete response"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 mt-2.5 leading-relaxed pl-9">
                    "{item.comment}"
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-end text-[10px] text-slate-400 space-x-1 pl-9">
                  <Clock className="w-3 h-3" />
                  <span>Recorded: {item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

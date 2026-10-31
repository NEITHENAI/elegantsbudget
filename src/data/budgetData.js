export const BUDGET_METADATA = {
  fiscalYear: 'FY 2027/2028',
  totalEnvelopeTn: 80.00,
  totalEnvelopeBn: 80000,
  domesticRevenueTn: 50.00,
  domesticRevenueBn: 50000,
  expenditureTn: 80.00,
  expenditureBn: 80000,
  financingGapTn: 30.00,
  financingGapBn: 30000,
  deficitRatio: 37.5,
  revenueShare: 62.5
};

export const GROUP_MEMBERS = [
  'Akot Joyce',
  'Ainabiitira Mary Trinah',
  'Kayiira Henry',
  'Magoola Grace Stephen'
];

export const REVENUE_STREAMS = [
  {
    id: 'rev_indirect',
    name: 'Indirect Consumption Taxes (VAT & Excise)',
    description: '18% Value Added Tax on domestic sales and excise duties on telecom airtime, beer, spirits, and fuel pump prices.',
    amountTn: 17.50,
    amountBn: 17500,
    sharePercent: 35.0,
    color: '#2563eb'
  },
  {
    id: 'rev_direct',
    name: 'Direct Domestic Taxes (PAYE & Corporate)',
    description: 'Pay As You Earn (PAYE) income tax from formal employment, Corporate Income Tax, and withholding tax on contracts.',
    amountTn: 16.50,
    amountBn: 16500,
    sharePercent: 33.0,
    color: '#0284c7'
  },
  {
    id: 'rev_trade',
    name: 'International Trade Taxes (Import Duties)',
    description: 'East African Community (EAC) common external tariffs, import customs duties, and cross-border petroleum clearances.',
    amountTn: 7.50,
    amountBn: 7500,
    sharePercent: 15.0,
    color: '#0d9488'
  },
  {
    id: 'rev_oil',
    name: 'Petroleum & Commercial Oil Revenues',
    description: 'Government royalties, transit fees, and production sharing revenues ring-fenced for capital infrastructure.',
    amountTn: 4.50,
    amountBn: 4500,
    sharePercent: 9.0,
    color: '#d97706'
  },
  {
    id: 'rev_ntr',
    name: 'Non-Tax Revenue (NTR) & User Fees',
    description: 'Ministry fees, passport issuances, mineral concession licensing, court fines, and regulatory compliance fees.',
    amountTn: 2.50,
    amountBn: 2500,
    sharePercent: 5.0,
    color: '#4f46e5'
  },
  {
    id: 'rev_grants',
    name: 'External Concessional Grants',
    description: 'Project grants and multilateral programmatic grants from development partners (World Bank, EU, AfDB).',
    amountTn: 1.50,
    amountBn: 1500,
    sharePercent: 3.0,
    color: '#64748b'
  }
];

export const EXPENDITURE_PROGRAMS = [
  {
    id: 'exp_debt',
    name: 'Public Debt Servicing & Amortization',
    description: 'Statutory debt repayment including interest on domestic treasury bills/bonds and external bilateral/multilateral loan service.',
    amountTn: 24.00,
    amountBn: 24000,
    sharePercent: 30.0,
    color: '#dc2626'
  },
  {
    id: 'exp_human_capital',
    name: 'Human Capital Development (Health & Education)',
    description: 'Universal Primary and Secondary Education, regional referral hospitals, medical supply distribution, and specialized training.',
    amountTn: 14.50,
    amountBn: 14500,
    sharePercent: 18.1,
    color: '#2563eb'
  },
  {
    id: 'exp_transport',
    name: 'Integrated Transport Infrastructure',
    description: 'Construction and upgrading of tourism roads, oil roads, maintenance of national highway network, and Standard Gauge Rail.',
    amountTn: 12.00,
    amountBn: 12000,
    sharePercent: 15.0,
    color: '#0284c7'
  },
  {
    id: 'exp_security',
    name: 'Security, Defense & Public Order',
    description: 'Logistics, modernization, border protection, and operational funding for the UPDF, Uganda Police, and internal security.',
    amountTn: 9.50,
    amountBn: 9500,
    sharePercent: 11.9,
    color: '#475569'
  },
  {
    id: 'exp_agro',
    name: 'Agro-Industrialization & Wealth Creation',
    description: 'Parish Development Model (PDM), agricultural research, disease control, post-harvest storage, and irrigation expansion.',
    amountTn: 7.50,
    amountBn: 7500,
    sharePercent: 9.4,
    color: '#16a34a'
  },
  {
    id: 'exp_energy',
    name: 'Energy & Mineral Development',
    description: 'Substation upgrades, rural electrification grid connections, transmission line construction, and mineral beneficiation.',
    amountTn: 6.50,
    amountBn: 6500,
    sharePercent: 8.1,
    color: '#d97706'
  },
  {
    id: 'exp_governance',
    name: 'Public Sector Governance & Administration',
    description: 'Judiciary court expansion, parliament administration, electoral commission readiness, and local government conditional grants.',
    amountTn: 6.00,
    amountBn: 6000,
    sharePercent: 7.5,
    color: '#7c3aed'
  }
];

export const INITIAL_CITIZEN_RESPONSES = [
  {
    id: 'resp_101',
    name: 'Ssempijja Robert',
    category: 'Business Owner / Trader',
    stance: 'Taxes Are Too High (VAT/Excise)',
    comment: 'With 18% VAT and high excise duties taking up UGX 17.5T, retail businesses in Kampala are struggling with reduced consumer purchasing power. Government should widen the tax base instead of over-squeezing formal traders.',
    timestamp: '2026-10-30 09:15'
  },
  {
    id: 'resp_102',
    name: 'Dr. Nabakooza Florence',
    category: 'Citizen / Taxpayer',
    stance: 'Needs More Health & Education',
    comment: 'Allocating UGX 14.5T to Human Capital is an improvement, but primary healthcare centers (HC IIIs and IVs) in rural districts still face chronic essential drug stock-outs. Health sector budget execution must be tracked strictly.',
    timestamp: '2026-10-30 10:42'
  },
  {
    id: 'resp_103',
    name: 'Kato Ronald',
    category: 'University Student',
    stance: 'Too High Debt Burden (30% Repayment)',
    comment: 'Dedication of UGX 24.0T to debt service alone is alarming—that is 30% of our entire national budget going to interest and debt repayment before a single teacher or hospital is funded. We need urgent debt management reforms.',
    timestamp: '2026-10-30 11:20'
  },
  {
    id: 'resp_104',
    name: 'Mwesigye Barnabas',
    category: 'Farmer / Agro-producer',
    stance: 'Agro-industrialization Underfunded',
    comment: 'The Parish Development Model (PDM) at UGX 7.5T is reaching households, but smallholders desperately need irrigation infrastructure and localized post-harvest storage to withstand prolonged dry spells.',
    timestamp: '2026-10-30 13:05'
  },
  {
    id: 'resp_105',
    name: 'Atuhaire Brenda',
    category: 'Civil Society / NGO',
    stance: 'Generally Supportive of Priorities',
    comment: 'Revenues from commercial petroleum (UGX 4.5T) must be strictly ring-fenced for capital infrastructure as stipulated in the Public Finance Management Act to prevent economic Dutch disease.',
    timestamp: '2026-10-30 14:18'
  },
  {
    id: 'resp_106',
    name: 'Mukasa David',
    category: 'Business Owner / Trader',
    stance: 'Generally Supportive of Priorities',
    comment: 'UGX 12.0T for integrated transport infrastructure is justifiable, especially the Standard Gauge Railway and highway rehabilitations, but the pace of project completion must improve to give value for money.',
    timestamp: '2026-10-30 15:30'
  },
  {
    id: 'resp_107',
    name: 'Akello Christine',
    category: 'Civil Servant',
    stance: 'Needs More Health & Education',
    comment: 'Capitation grants for UPE and USE schools have not kept pace with inflation. As human capital receives UGX 14.5T, government must prioritize teacher welfare, instructional materials, and science laboratories upcountry.',
    timestamp: '2026-10-30 16:45'
  },
  {
    id: 'resp_108',
    name: 'Batte Isaac',
    category: 'Citizen / Taxpayer',
    stance: 'Generally Supportive of Priorities',
    comment: 'The youth empowerment funds under agro-industrialization are commendable, but access criteria remain bureaucratic for urban youth. Digital registration of SACCO beneficiaries should be fast-tracked.',
    timestamp: '2026-10-30 17:10'
  },
  {
    id: 'resp_109',
    name: 'Nagawa Prossy',
    category: 'Business Owner / Trader',
    stance: 'Taxes Are Too High (VAT/Excise)',
    comment: 'Fuel pump prices remain high due to international trade taxes and fuel import levies (UGX 7.5T). This directly inflates food transport fares from rural districts into Kampala urban markets.',
    timestamp: '2026-10-30 18:22'
  },
  {
    id: 'resp_110',
    name: 'Ochwo Gerald',
    category: 'Civil Society / NGO',
    stance: 'Too High Debt Burden (30% Repayment)',
    comment: 'A deficit financing gap of UGX 30.0T (37.5% of total budget) will require heavy reliance on domestic commercial debt, which risks crowding out private sector commercial bank lending.',
    timestamp: '2026-10-30 19:05'
  }
];

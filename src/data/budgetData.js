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

export const INITIAL_CITIZEN_RESPONSES = [];

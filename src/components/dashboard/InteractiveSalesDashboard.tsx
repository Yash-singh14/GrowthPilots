import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from 'recharts';
import {
  Download,
  Filter,
  Sparkles,
  RefreshCw,
  Award,
  Layers,
  CheckCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { calculateFilteredSales, PIPELINE_STAGES_DATA } from '../../data/salesData';
import { formatINR, formatPercent, formatNumber, exportToCSV } from '../../utils/formatters';
import { KPICard } from '../common/KPICard';

interface DashboardProps {
  compactMode?: boolean;
  initialQuarter?: string;
  showExport?: boolean;
  darkTheme?: boolean;
}

const REGION_COLORS: Record<string, string> = {
  West: '#7657FF',
  North: '#28D7E5',
  South: '#3B82F6',
  East: '#10B981',
};

const CATEGORY_COLORS = ['#7657FF', '#28D7E5', '#38BDF8', '#818CF8'];

export const InteractiveSalesDashboard: React.FC<DashboardProps> = ({
  compactMode = false,
  initialQuarter = 'Full-Year-2026',
  showExport = true,
  darkTheme = false,
}) => {
  // Filter States
  const [dateRange, setDateRange] = useState<string>(compactMode ? 'Q3-2026' : initialQuarter);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRep, setSelectedRep] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'trends' | 'categories' | 'pipeline'>('trends');

  // Compute live filtered data guaranteeing 100% agreement between KPIs and charts
  const {
    filteredRecords,
    kpis,
    monthlyTrends,
    regionalBreakdown,
    salespersonLeaderboard,
    categoryBreakdown,
  } = useMemo(() => {
    return calculateFilteredSales(dateRange, selectedRegion, selectedCategory, selectedRep);
  }, [dateRange, selectedRegion, selectedCategory, selectedRep]);

  // Handle CSV export of filtered records
  const handleExportCSV = () => {
    const exportData = filteredRecords.map(r => ({
      'Transaction ID': r.id,
      Date: r.date,
      Month: r.month,
      Quarter: r.quarter,
      Salesperson: r.salesperson,
      Region: r.region,
      'Product Category': r.productCategory,
      Orders: r.orders,
      'Actual Revenue (INR)': r.revenue,
      'Sales Target (INR)': r.target,
      'Attainment (%)': ((r.revenue / r.target) * 100).toFixed(1),
      'Pipeline Stage': r.pipelineStage,
    }));

    exportToCSV(`GrowthPilots_Sales_Data_${dateRange}_${selectedRegion}.csv`, exportData);
  };

  const handleResetFilters = () => {
    setDateRange('Full-Year-2026');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSelectedRep('All');
  };

  return (
    <div
      className={`w-full max-w-full min-w-0 rounded-2xl border transition-colors shadow-premium overflow-hidden box-border ${
        darkTheme
          ? 'bg-[#1B1B45] border-indigo-900/80 text-white'
          : 'bg-white border-slate-200/90 text-[#161B32]'
      }`}
    >
      {/* Top Header / Demo Banner */}
      <div
        className={`px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b min-w-0 ${
          darkTheme
            ? 'bg-[#10152B] border-indigo-950 text-white'
            : 'bg-[#10152B] border-slate-800 text-white'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#28D7E5] animate-pulse flex-shrink-0" />
          <div className="truncate">
            <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white flex items-center gap-2 truncate">
              <span className="truncate">Commercial Sales & Target Intelligence</span>
              <span className="text-[10px] font-semibold bg-[#1B1B45] text-[#28D7E5] border border-cyan-400/30 px-2 py-0.5 rounded-full flex-shrink-0">
                Interactive Demo
              </span>
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs flex-shrink-0">
          {showExport && !compactMode && (
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B1B45] hover:bg-[#25255e] text-[#28D7E5] font-semibold border border-indigo-800 transition-colors focus:ring-2 focus:ring-[#7657FF]"
              title="Download visible sample data as CSV"
            >
              <Download className="w-3.5 h-3.5 text-[#28D7E5]" />
              <span>Export CSV</span>
            </button>
          )}
          <span className="text-slate-400 hidden sm:inline text-[11px]">
            Showing <strong className="text-white">{filteredRecords.length}</strong> records
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div
        className={`p-3.5 sm:p-4 border-b min-w-0 ${
          darkTheme
            ? 'bg-[#141438] border-indigo-900/60'
            : 'bg-[#F5F6FC] border-slate-200/80'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#7657FF] uppercase tracking-wider mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          {/* Date Range Selector */}
          <div className="flex flex-col min-w-[120px]">
            <label className={`text-[10px] font-semibold mb-0.5 ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
              Quarter
            </label>
            <select
              value={dateRange}
              onChange={e => setDateRange(e.target.value)}
              className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#7657FF] ${
                darkTheme
                  ? 'bg-[#1B1B45] border border-indigo-700/80 text-white'
                  : 'bg-white border border-slate-300 text-slate-700'
              }`}
            >
              <option value="Full-Year-2026">Full Year 2026</option>
              <option value="Q3-2026">Q3 2026 (Current)</option>
              <option value="Q2-2026">Q2 2026</option>
              <option value="Q1-2026">Q1 2026</option>
            </select>
          </div>

          {/* Region Selector */}
          <div className="flex flex-col min-w-[100px]">
            <label className={`text-[10px] font-semibold mb-0.5 ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
              Region
            </label>
            <select
              value={selectedRegion}
              onChange={e => setSelectedRegion(e.target.value)}
              className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#7657FF] ${
                darkTheme
                  ? 'bg-[#1B1B45] border border-indigo-700/80 text-white'
                  : 'bg-white border border-slate-300 text-slate-700'
              }`}
            >
              <option value="All">All Regions</option>
              <option value="West">West Region</option>
              <option value="North">North Region</option>
              <option value="South">South Region</option>
              <option value="East">East Region</option>
            </select>
          </div>

          {/* Category Selector */}
          <div className="flex flex-col min-w-[120px]">
            <label className={`text-[10px] font-semibold mb-0.5 ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
              Product Solution
            </label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#7657FF] ${
                darkTheme
                  ? 'bg-[#1B1B45] border border-indigo-700/80 text-white'
                  : 'bg-white border border-slate-300 text-slate-700'
              }`}
            >
              <option value="All">All Categories</option>
              <option value="Enterprise BI">Enterprise BI</option>
              <option value="Automation Bots">Automation Bots</option>
              <option value="Data Pipelines">Data Pipelines</option>
              <option value="Predictive Models">Predictive Models</option>
            </select>
          </div>

          {/* Salesperson Selector */}
          <div className="flex flex-col min-w-[120px]">
            <label className={`text-[10px] font-semibold mb-0.5 ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
              Sales Rep
            </label>
            <select
              value={selectedRep}
              onChange={e => setSelectedRep(e.target.value)}
              className={`text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#7657FF] ${
                darkTheme
                  ? 'bg-[#1B1B45] border border-indigo-700/80 text-white'
                  : 'bg-white border border-slate-300 text-slate-700'
              }`}
            >
              <option value="All">All Representatives</option>
              <option value="Rohan Mehta">Rohan Mehta (West)</option>
              <option value="Aarav Sharma">Aarav Sharma (North)</option>
              <option value="Pooja Iyer">Pooja Iyer (South)</option>
              <option value="Sneha Roy">Sneha Roy (East)</option>
            </select>
          </div>

          {/* Reset Filters */}
          {(dateRange !== 'Full-Year-2026' || selectedRegion !== 'All' || selectedCategory !== 'All' || selectedRep !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#28D7E5] hover:underline font-bold inline-flex items-center gap-1 mt-3 px-2 py-1 rounded transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6 min-w-0">
        {/* KPI Scorecard Grid: 4 columns on large, 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 min-w-0">
          <KPICard
            variant={darkTheme ? 'dark' : 'default'}
            title="Total Sales"
            value={formatINR(kpis.totalSales)}
            target={formatINR(kpis.totalTarget)}
            achievementRate={kpis.achievementRate}
            change={`+${kpis.salesGrowth}%`}
          />

          <KPICard
            variant={darkTheme ? 'dark' : 'default'}
            title="Target Achievement"
            value={formatPercent(kpis.achievementRate)}
            subtext={`Target: ${formatINR(kpis.totalTarget, true)}`}
            achievementRate={kpis.achievementRate}
            change={kpis.achievementRate >= 100 ? 'On Track' : 'Gap Detected'}
            isPositiveChange={kpis.achievementRate >= 100}
          />

          <KPICard
            variant={darkTheme ? 'dark' : 'default'}
            title="Total Orders"
            value={formatNumber(kpis.totalOrders)}
            subtext={`Avg: ${formatINR(kpis.averageOrderValue, true)}`}
            change="+12.4% YoY"
          />

          <KPICard
            variant={darkTheme ? 'dark' : 'default'}
            title="Top Performing Rep"
            value={kpis.topRep}
            subtext="Highest quota attainment"
            change="Leader"
          />
        </div>

        {/* Charts Row: Actual vs Target Trend + Regional Donut */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-w-0">
          {/* Main Chart Column: 8 cols */}
          <div
            className={`lg:col-span-8 rounded-xl p-4 sm:p-5 border min-w-0 ${
              darkTheme
                ? 'bg-[#141438] border-indigo-900/60'
                : 'bg-[#F5F6FC] border-slate-200/80'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-sm font-bold text-current">
                  Sales Trend: Actual Revenue vs. Target
                </h4>
                <p className={`text-xs ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
                  Comparison in INR (₹) across months
                </p>
              </div>

              {/* View Toggle */}
              <div
                className={`flex items-center gap-1 p-0.5 rounded-lg border text-xs ${
                  darkTheme
                    ? 'bg-[#1B1B45] border-indigo-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveTab('trends')}
                  className={`px-2.5 py-1 rounded font-semibold text-xs transition-all ${
                    activeTab === 'trends'
                      ? 'bg-[#7657FF] text-white shadow-xs'
                      : 'text-current opacity-70 hover:opacity-100'
                  }`}
                >
                  Trend Bars
                </button>
                <button
                  onClick={() => setActiveTab('categories')}
                  className={`px-2.5 py-1 rounded font-semibold text-xs transition-all ${
                    activeTab === 'categories'
                      ? 'bg-[#7657FF] text-white shadow-xs'
                      : 'text-current opacity-70 hover:opacity-100'
                  }`}
                >
                  Categories
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-2.5 py-1 rounded font-semibold text-xs transition-all ${
                    activeTab === 'pipeline'
                      ? 'bg-[#7657FF] text-white shadow-xs'
                      : 'text-current opacity-70 hover:opacity-100'
                  }`}
                >
                  Funnel
                </button>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full min-w-0">
              {activeTab === 'trends' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyTrends} margin={{ top: 10, right: 10, left: 5, bottom: 20 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={darkTheme ? '#2A2A60' : '#E2E8F0'}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      stroke={darkTheme ? '#9E9EB8' : '#64748B'}
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: darkTheme ? '#373775' : '#CBD5E1' }}
                    />
                    <YAxis
                      stroke={darkTheme ? '#9E9EB8' : '#64748B'}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={val => `₹${(val / 100000).toFixed(0)}L`}
                    />
                    <Tooltip
                      formatter={(value: any) => [formatINR(Number(value)), '']}
                      contentStyle={{
                        backgroundColor: '#10152B',
                        color: '#FFF',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '12px',
                      }}
                    />
                    <Legend
                      verticalAlign="top"
                      height={32}
                      formatter={value => (
                        <span className={`text-xs font-semibold ${darkTheme ? 'text-indigo-200' : 'text-slate-700'}`}>
                          {value === 'actual' ? 'Actual Revenue' : 'Assigned Target'}
                        </span>
                      )}
                    />
                    <Bar dataKey="actual" name="actual" fill="#7657FF" radius={[4, 4, 0, 0]} maxBarSize={36} />
                    <Bar
                      dataKey="target"
                      name="target"
                      fill={darkTheme ? '#3B4B75' : '#CADFFF'}
                      radius={[4, 4, 0, 0]}
                      maxBarSize={36}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'categories' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryBreakdown} margin={{ top: 10, right: 10, left: 5, bottom: 25 }}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={darkTheme ? '#2A2A60' : '#E2E8F0'}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="category"
                      stroke={darkTheme ? '#9E9EB8' : '#64748B'}
                      fontSize={10}
                      tickLine={false}
                    />
                    <YAxis
                      stroke={darkTheme ? '#9E9EB8' : '#64748B'}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={val => `₹${(val / 100000).toFixed(0)}L`}
                    />
                    <Tooltip
                      formatter={(val: any) => [formatINR(Number(val)), 'Revenue']}
                      contentStyle={{
                        backgroundColor: '#10152B',
                        color: '#FFF',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '11px',
                      }}
                    />
                    <Bar dataKey="revenue" name="Revenue" radius={[4, 4, 0, 0]}>
                      {categoryBreakdown.map((_, idx) => (
                        <Cell key={idx} fill={CATEGORY_COLORS[idx % CATEGORY_COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'pipeline' && (
                <div className="space-y-3 pt-2">
                  {PIPELINE_STAGES_DATA.map((stage, idx) => (
                    <div key={stage.stage} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-current truncate pr-2">
                          {idx + 1}. {stage.stage}
                        </span>
                        <div className="space-x-2 text-current opacity-80 flex-shrink-0">
                          <span>{stage.count} deals</span>
                          <strong className="text-[#28D7E5]">{formatINR(stage.value, true)}</strong>
                        </div>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          darkTheme ? 'bg-indigo-950' : 'bg-slate-200'
                        }`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-[#7657FF] to-[#28D7E5] rounded-full"
                          style={{ width: `${stage.conversion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Regional Column: 4 cols */}
          <div
            className={`lg:col-span-4 rounded-xl p-4 sm:p-5 border flex flex-col justify-between min-w-0 ${
              darkTheme
                ? 'bg-[#141438] border-indigo-900/60'
                : 'bg-[#F5F6FC] border-slate-200/80'
            }`}
          >
            <div>
              <h4 className="text-sm font-bold text-current mb-0.5">Sales by Region</h4>
              <p className={`text-xs mb-3 ${darkTheme ? 'text-indigo-200' : 'text-slate-500'}`}>
                Revenue distribution across zones
              </p>

              <div className="h-44 w-full min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionalBreakdown}
                      dataKey="revenue"
                      nameKey="region"
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={68}
                      paddingAngle={3}
                    >
                      {regionalBreakdown.map(entry => (
                        <Cell key={entry.region} fill={REGION_COLORS[entry.region] || '#7657FF'} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(val: any) => [formatINR(Number(val)), 'Revenue']}
                      contentStyle={{
                        backgroundColor: '#10152B',
                        color: '#FFF',
                        borderRadius: '8px',
                        fontSize: '11px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div
              className={`space-y-1.5 pt-3 border-t min-w-0 ${
                darkTheme ? 'border-indigo-900/60' : 'border-slate-200'
              }`}
            >
              {regionalBreakdown.map(reg => (
                <div key={reg.region} className="flex items-center justify-between text-xs min-w-0">
                  <div className="flex items-center gap-2 truncate">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: REGION_COLORS[reg.region] }}
                    />
                    <span className="font-semibold truncate">{reg.region} Region</span>
                  </div>
                  <div className="space-x-2 flex-shrink-0">
                    <span className="opacity-70">{reg.share}%</span>
                    <strong className="text-[#28D7E5]">{formatINR(reg.revenue, true)}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sales Rep Leaderboard Table */}
        <div
          className={`rounded-xl p-4 sm:p-5 border min-w-0 ${
            darkTheme
              ? 'bg-[#141438] border-indigo-900/60'
              : 'bg-[#F5F6FC] border-slate-200/80'
          }`}
        >
          <div className="flex items-center justify-between mb-3 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <Award className="w-4 h-4 text-[#28D7E5] flex-shrink-0" />
              <h4 className="text-sm font-bold text-current truncate">
                Sales Representative Quota Leaderboard
              </h4>
            </div>
            <span className={`text-xs ${darkTheme ? 'text-indigo-200' : 'text-slate-500'} flex-shrink-0`}>
              Sorted by Revenue
            </span>
          </div>

          <div className="overflow-x-auto min-w-0">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead>
                <tr
                  className={`border-b font-bold uppercase text-[10px] ${
                    darkTheme
                      ? 'border-indigo-900/60 text-indigo-300'
                      : 'border-slate-200 text-slate-400'
                  }`}
                >
                  <th className="pb-2">Salesperson</th>
                  <th className="pb-2">Region</th>
                  <th className="pb-2 text-right">Actual</th>
                  <th className="pb-2 text-right">Target</th>
                  <th className="pb-2 text-right">Attainment</th>
                  <th className="pb-2 text-center">Deals</th>
                </tr>
              </thead>
              <tbody
                className={`divide-y font-medium ${
                  darkTheme ? 'divide-indigo-900/40' : 'divide-slate-200/60'
                }`}
              >
                {salespersonLeaderboard.map((rep, idx) => (
                  <tr
                    key={rep.name}
                    className={`transition-colors ${
                      darkTheme ? 'hover:bg-[#1B1B45]' : 'hover:bg-white/80'
                    }`}
                  >
                    <td className="py-2.5 font-bold flex items-center gap-2 text-current">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
                          idx === 0
                            ? 'bg-[#7657FF] text-white font-extrabold'
                            : darkTheme
                            ? 'bg-indigo-900 text-indigo-200'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="truncate">{rep.name}</span>
                    </td>
                    <td className="py-2.5 opacity-80">{rep.region}</td>
                    <td className="py-2.5 text-right font-bold text-current">{formatINR(rep.revenue)}</td>
                    <td className="py-2.5 text-right opacity-70">{formatINR(rep.target)}</td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                          rep.achievementRate >= 100
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-[#7657FF]/20 text-violet-300 border border-[#7657FF]/30'
                        }`}
                      >
                        {rep.achievementRate}%
                      </span>
                    </td>
                    <td className="py-2.5 text-center opacity-80">{rep.dealsClosed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

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
import { Sparkles, Trophy, TrendingUp, BarChart2, PieChart as PieIcon } from 'lucide-react';
import { calculateFilteredSales } from '../../data/salesData';
import { formatINR, formatPercent, formatNumber } from '../../utils/formatters';
import { KPICard } from '../common/KPICard';

const REGION_COLORS: Record<string, string> = {
  West: '#7657FF',
  North: '#28D7E5',
  South: '#1B1B45',
  East: '#10B981',
};

export const HeroDashboardPreview: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<string>('Q3-2026');
  const [activeView, setActiveView] = useState<'trends' | 'regions' | 'reps'>('trends');

  // Compute live data for selected quarter
  const { kpis, monthlyTrends, regionalBreakdown, salespersonLeaderboard } = useMemo(() => {
    return calculateFilteredSales(selectedQuarter, 'All', 'All', 'All');
  }, [selectedQuarter]);

  return (
    <div className="w-full max-w-full min-w-0 rounded-2xl bg-white border border-[#D9D0FF]/80 shadow-premium overflow-hidden box-border">
      {/* Top Bar with Demo Tag & Quarter Switcher */}
      <div className="bg-[#10152B] text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2.5 border-b border-indigo-950">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-[#28D7E5] animate-pulse flex-shrink-0" />
          <span className="text-xs font-bold tracking-tight text-white truncate">
            Sales Performance Dashboard
          </span>
          <span className="text-[10px] font-semibold bg-[#1B1B45] text-[#28D7E5] border border-cyan-400/30 px-2 py-0.5 rounded-full flex-shrink-0">
            Interactive Demo
          </span>
        </div>

        {/* Quarter Quick-Tabs */}
        <div className="flex items-center bg-[#1B1B45] p-0.5 rounded-lg border border-indigo-900/60 text-[11px]">
          {(['Q1-2026', 'Q2-2026', 'Q3-2026'] as const).map(q => (
            <button
              key={q}
              onClick={() => setSelectedQuarter(q)}
              className={`px-2 py-0.5 rounded font-semibold transition-all ${
                selectedQuarter === q
                  ? 'bg-[#7657FF] text-white shadow-xs'
                  : 'text-indigo-200 hover:text-white'
              }`}
            >
              {q.replace('-2026', '')}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4 min-w-0">
        {/* KPI Trio Row: 3 clean cards with wrapping & min-w-0 */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 min-w-0">
          <KPICard
            compact={true}
            title="Total Sales"
            value={formatINR(kpis.totalSales, true)}
            target={formatINR(kpis.totalTarget, true)}
            achievementRate={kpis.achievementRate}
            change={`+${kpis.salesGrowth}%`}
          />
          <KPICard
            compact={true}
            title="Target Pacing"
            value={formatPercent(kpis.achievementRate)}
            achievementRate={kpis.achievementRate}
            change={kpis.achievementRate >= 100 ? 'On Track' : 'Gap'}
          />
          <KPICard
            compact={true}
            title="Orders Closed"
            value={formatNumber(kpis.totalOrders)}
            subtext={`Avg: ${formatINR(kpis.averageOrderValue, true)}`}
            change="+12%"
          />
        </div>

        {/* View Switcher Tabs (Trends / Regions / Reps) */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2 gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#68708A]">
            {activeView === 'trends'
              ? 'Monthly Trend (Actual vs Target)'
              : activeView === 'regions'
              ? 'Territory Breakdown'
              : 'Sales Rep Leaderboard'}
          </span>

          <div className="flex items-center gap-1 bg-[#F5F6FC] p-1 rounded-lg border border-slate-200/80 text-xs">
            <button
              onClick={() => setActiveView('trends')}
              className={`px-2 py-1 rounded font-semibold transition-all flex items-center gap-1 text-[11px] ${
                activeView === 'trends'
                  ? 'bg-[#7657FF] text-white shadow-xs'
                  : 'text-[#68708A] hover:text-[#161B32]'
              }`}
            >
              <BarChart2 className="w-3 h-3" />
              <span className="hidden sm:inline">Trend</span>
            </button>
            <button
              onClick={() => setActiveView('regions')}
              className={`px-2 py-1 rounded font-semibold transition-all flex items-center gap-1 text-[11px] ${
                activeView === 'regions'
                  ? 'bg-[#7657FF] text-white shadow-xs'
                  : 'text-[#68708A] hover:text-[#161B32]'
              }`}
            >
              <PieIcon className="w-3 h-3" />
              <span className="hidden sm:inline">Regions</span>
            </button>
            <button
              onClick={() => setActiveView('reps')}
              className={`px-2 py-1 rounded font-semibold transition-all flex items-center gap-1 text-[11px] ${
                activeView === 'reps'
                  ? 'bg-[#7657FF] text-white shadow-xs'
                  : 'text-[#68708A] hover:text-[#161B32]'
              }`}
            >
              <Trophy className="w-3 h-3" />
              <span className="hidden sm:inline">Reps</span>
            </button>
          </div>
        </div>

        {/* View Content: Guaranteed to fit in 210px height without clipping */}
        <div className="h-[210px] w-full min-w-0">
          {activeView === 'trends' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyTrends} margin={{ top: 10, right: 10, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0EDFF" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="#68708A"
                  fontSize={10}
                  tickLine={false}
                  axisLine={{ stroke: '#EAF3FF' }}
                />
                <YAxis
                  stroke="#68708A"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={val => `₹${(val / 100000).toFixed(0)}L`}
                />
                <Tooltip
                  formatter={(val: any) => [formatINR(Number(val)), '']}
                  contentStyle={{
                    backgroundColor: '#10152B',
                    color: '#FFF',
                    borderRadius: '8px',
                    fontSize: '11px',
                    border: 'none',
                  }}
                />
                <Legend
                  verticalAlign="top"
                  height={28}
                  formatter={value => (
                    <span className="text-[11px] font-semibold text-slate-700">
                      {value === 'actual' ? 'Actual' : 'Target'}
                    </span>
                  )}
                />
                <Bar dataKey="actual" name="actual" fill="#7657FF" radius={[4, 4, 0, 0]} maxBarSize={28} />
                <Bar dataKey="target" name="target" fill="#CADFFF" radius={[4, 4, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {activeView === 'regions' && (
            <div className="h-full flex items-center justify-between gap-4">
              <div className="h-full w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionalBreakdown}
                      dataKey="revenue"
                      nameKey="region"
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={58}
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

              <div className="w-1/2 space-y-1.5 pr-2">
                {regionalBreakdown.map(reg => (
                  <div key={reg.region} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 truncate">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: REGION_COLORS[reg.region] }}
                      />
                      <span className="font-semibold text-[#161B32] truncate">{reg.region}</span>
                    </div>
                    <span className="font-bold text-[#7657FF]">{reg.share}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'reps' && (
            <div className="h-full overflow-y-auto space-y-2 pr-1">
              {salespersonLeaderboard.map((rep, idx) => (
                <div
                  key={rep.name}
                  className="p-2 rounded-lg bg-[#F5F6FC] border border-slate-200/80 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                        idx === 0
                          ? 'bg-[#7657FF] text-white'
                          : 'bg-white text-[#161B32] border border-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="truncate">
                      <span className="font-bold text-[#161B32] block leading-tight truncate">
                        {rep.name}
                      </span>
                      <span className="text-[10px] text-[#68708A]">{rep.region} Zone</span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-extrabold text-[#161B32] block leading-tight">
                      {formatINR(rep.revenue, true)}
                    </span>
                    <span
                      className={`text-[10px] font-bold ${
                        rep.achievementRate >= 100 ? 'text-emerald-600' : 'text-[#7657FF]'
                      }`}
                    >
                      {rep.achievementRate}% Quota
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info pill */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#68708A]">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#7657FF]" />
            Audited Q1–Q3 Commercial Ledger
          </span>
          <span className="font-semibold text-emerald-600">✓ All KPIs Reconciled</span>
        </div>
      </div>
    </div>
  );
};

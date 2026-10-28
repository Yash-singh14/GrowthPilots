import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  target?: string;
  achievementRate?: number;
  change?: string;
  isPositiveChange?: boolean;
  subtext?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'highlight' | 'dark';
  compact?: boolean;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  target,
  achievementRate,
  change,
  isPositiveChange = true,
  subtext,
  icon,
  variant = 'default',
  compact = false,
}) => {
  const isDark = variant === 'dark';
  const isAccent = variant === 'accent';

  return (
    <div
      className={`min-w-0 w-full rounded-xl border transition-all duration-200 ${
        compact ? 'p-3.5' : 'p-4 sm:p-5'
      } ${
        isDark
          ? 'bg-[#1B1B45] border-indigo-800/80 text-white shadow-sm'
          : isAccent
          ? 'bg-[#F0EDFF] border-[#D9D0FF] shadow-xs'
          : 'bg-white border-slate-200/90 shadow-xs hover:border-[#D9D0FF]'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5 min-w-0">
        <span
          className={`text-[11px] font-bold uppercase tracking-wider truncate ${
            isDark ? 'text-indigo-200' : 'text-[#68708A]'
          }`}
          title={title}
        >
          {title}
        </span>
        {icon && (
          <div
            className={`p-1.5 rounded-lg flex-shrink-0 ${
              isDark ? 'bg-indigo-900/60 text-[#28D7E5]' : 'bg-[#F5F6FC] text-[#7657FF]'
            }`}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-1.5 min-w-0">
        <span
          className={`font-black tracking-tight leading-none truncate max-w-full ${
            compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
          } ${isDark ? 'text-white' : 'text-[#161B32]'}`}
          title={value}
        >
          {value}
        </span>

        {change && (
          <span
            className={`inline-flex items-center text-[11px] font-bold flex-shrink-0 px-1.5 py-0.5 rounded ${
              isPositiveChange
                ? isDark
                  ? 'bg-emerald-950/80 text-emerald-400'
                  : 'bg-emerald-50 text-emerald-700'
                : isDark
                ? 'bg-rose-950/80 text-rose-400'
                : 'bg-rose-50 text-rose-700'
            }`}
          >
            {isPositiveChange ? (
              <ArrowUpRight className="w-3 h-3 mr-0.5 flex-shrink-0" />
            ) : (
              <ArrowDownRight className="w-3 h-3 mr-0.5 flex-shrink-0" />
            )}
            <span className="truncate">{change}</span>
          </span>
        )}
      </div>

      {achievementRate !== undefined && (
        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-indigo-900/60 min-w-0">
          <div className="flex justify-between items-center text-[10px] mb-1 gap-1">
            <span className={`truncate ${isDark ? 'text-indigo-300' : 'text-slate-500'}`}>
              Target: {target || 'N/A'}
            </span>
            <span
              className={`font-bold flex-shrink-0 ${
                achievementRate >= 100
                  ? isDark
                    ? 'text-emerald-400'
                    : 'text-emerald-600'
                  : isDark
                  ? 'text-cyan-300'
                  : 'text-brand-violet'
              }`}
            >
              {achievementRate.toFixed(1)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                achievementRate >= 100
                  ? 'bg-emerald-500'
                  : 'bg-gradient-to-r from-[#7657FF] to-[#28D7E5]'
              }`}
              style={{ width: `${Math.min(achievementRate, 100)}%` }}
            />
          </div>
        </div>
      )}

      {subtext && achievementRate === undefined && (
        <p className={`text-[11px] mt-1.5 truncate ${isDark ? 'text-indigo-300' : 'text-slate-500'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};

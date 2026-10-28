import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'violet' | 'cyan' | 'green' | 'amber' | 'slate' | 'dark' | 'lavender';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'violet',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles = {
    violet: 'bg-[#F0EDFF] text-[#7657FF] border-[#D9D0FF] font-semibold',
    blue: 'bg-[#EAF3FF] text-[#1B1B45] border-[#CADFFF] font-semibold',
    purple: 'bg-[#F0EDFF] text-[#7657FF] border-[#D9D0FF] font-semibold',
    cyan: 'bg-[#E0F9FC] text-[#0A8894] border-[#A6EEF5] font-semibold',
    lavender: 'bg-[#F0EDFF] text-[#7657FF] border-[#E1DAFF] font-semibold',
    dark: 'bg-[#1B1B45] text-[#28D7E5] border-indigo-800/80 font-semibold',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
    amber: 'bg-amber-50 text-amber-800 border-amber-200 font-medium',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 font-medium',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

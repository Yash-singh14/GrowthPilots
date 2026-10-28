import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  to,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  style,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold shadow-md hover:shadow-lg',
  };

  const variantStyles = {
    primary:
      'bg-[#7657FF] hover:bg-[#6344E8] text-white shadow-md hover:shadow-lg focus:ring-[#7657FF] border border-transparent active:scale-[0.98]',
    gradient:
      'bg-gradient-to-r from-[#7657FF] to-[#28D7E5] text-white hover:brightness-105 shadow-md hover:shadow-glow-violet border border-transparent active:scale-[0.98]',
    secondary:
      'bg-[#10152B] hover:bg-[#1B1B45] text-white shadow-md hover:shadow-lg focus:ring-[#10152B] border border-slate-700 active:scale-[0.98]',
    dark:
      'bg-[#1B1B45] hover:bg-[#25255c] text-white shadow-sm border border-indigo-900/60 focus:ring-[#28D7E5] active:scale-[0.98]',
    outline:
      'bg-white hover:bg-[#F0EDFF] text-[#161B32] hover:text-[#7657FF] border border-slate-300 focus:ring-[#7657FF] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-[#F0EDFF] text-[#161B32] hover:text-[#7657FF] border border-transparent focus:ring-[#7657FF]',
  };

  // Inline style fallback ensuring primary button is NEVER transparent white-on-white
  const defaultInlineStyles: React.CSSProperties =
    variant === 'primary'
      ? { backgroundColor: '#7657FF', color: '#FFFFFF', ...style }
      : variant === 'secondary'
      ? { backgroundColor: '#10152B', color: '#FFFFFF', ...style }
      : { ...style };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} style={defaultInlineStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} style={defaultInlineStyles} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

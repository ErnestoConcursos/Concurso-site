
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 rounded-sm focus:outline-none";
  
  const variants = {
    primary: "bg-[#B58863] text-white hover:bg-[#a07654]",
    secondary: "bg-[#F0D9B5] text-[#4b3621] hover:bg-[#e6ccaa]",
    outline: "border-2 border-[#B58863] text-[#B58863] hover:bg-[#B58863] hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-10 py-5 text-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

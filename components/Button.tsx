import React, { useState } from 'react';
import { CalcButtonDef } from '../constants';

interface ButtonProps {
  buttonDef: CalcButtonDef;
  onClick: (def: CalcButtonDef) => void;
}

export const Button: React.FC<ButtonProps> = ({ buttonDef, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onClick(buttonDef);
    
    // Reset press state quickly for animation re-trigger potential
    setTimeout(() => setIsPressed(false), 150);
  };

  const getBaseStyles = () => {
    return "h-16 text-xl font-medium rounded-full shadow-sm transition-all duration-100 flex items-center justify-center select-none cursor-pointer active:scale-95 active:shadow-inner";
  };

  const getColorStyles = (type: string) => {
    switch (type) {
      case 'accent':
        return "bg-orange-400 text-white hover:bg-orange-500";
      case 'secondary':
        return "bg-slate-300 text-slate-800 hover:bg-slate-400";
      case 'primary':
      default:
        return "bg-white text-slate-700 hover:bg-slate-50";
    }
  };

  const spanClass = buttonDef.span === 2 ? "col-span-2 w-full aspect-[2.1/1]" : "col-span-1 w-full aspect-square";

  return (
    <button
      onClick={handlePress}
      className={`
        ${getBaseStyles()} 
        ${getColorStyles(buttonDef.type)} 
        ${spanClass}
        ${isPressed ? 'animate-shake' : ''}
      `}
      aria-label={buttonDef.label}
    >
      {buttonDef.label}
    </button>
  );
};
import React from 'react';

interface DisplayProps {
  text: string;
  isAnimating: boolean;
}

export const Display: React.FC<DisplayProps> = ({ text, isAnimating }) => {
  return (
    <div className="w-full h-32 bg-slate-800 rounded-2xl mb-6 p-6 flex items-end justify-end shadow-inner relative overflow-hidden">
      {/* Background decoration to look like a screen */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.4),transparent)]"></div>
      
      <div 
        key={text} // Key change triggers animation
        className={`text-white text-right font-medium leading-tight w-full break-words ${isAnimating ? 'animate-fade-in' : ''}`}
        style={{ fontSize: text.length > 20 ? '1.5rem' : '2rem' }}
      >
        {text}
      </div>
    </div>
  );
};
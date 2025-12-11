import React, { useState, useCallback } from 'react';
import { Display } from './Display';
import { Button } from './Button';
import { SUPPORT_MESSAGES, CALCULATOR_BUTTONS, CalcButtonDef } from '../constants';

export const Calculator: React.FC = () => {
  const [displayMessage, setDisplayMessage] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomMessage = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * SUPPORT_MESSAGES.length);
    return SUPPORT_MESSAGES[randomIndex];
  }, []);

  const handleButtonClick = (buttonDef: CalcButtonDef) => {
    // Trigger animation state
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 10);

    if (buttonDef.action === 'clear') {
      setDisplayMessage("0");
    } else {
      // Logic for random message generation
      let newMessage = getRandomMessage();
      
      // Ensure we don't show the exact same message twice in a row immediately if possible
      if (newMessage === displayMessage && SUPPORT_MESSAGES.length > 1) {
        while (newMessage === displayMessage) {
          newMessage = getRandomMessage();
        }
      }
      
      setDisplayMessage(newMessage);
    }

    // Optional: Add haptic feedback if available on mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="bg-slate-200 p-6 rounded-[2rem] shadow-2xl border border-slate-100/50 backdrop-blur-sm">
      <Display text={displayMessage} isAnimating={isAnimating} />
      
      <div className="grid grid-cols-4 gap-4">
        {CALCULATOR_BUTTONS.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((btn, colIndex) => (
              <Button 
                key={`${rowIndex}-${colIndex}`} 
                buttonDef={btn} 
                onClick={handleButtonClick} 
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
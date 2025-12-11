export type ButtonType = 'primary' | 'secondary' | 'accent';

export interface CalcButtonDef {
  label: string;
  type: ButtonType;
  action: 'clear' | 'message';
  span?: number;
}

export const SUPPORT_MESSAGES = [
  "Bro relax.",
  "Ektu pani kha.",
  "Tumar life safe.",
  "Don’t overthink.",
  "You’re doing better than you think.",
  "Take a deep breath.",
  "Everything will be okay.",
  "It’s not that deep.",
  "One step at a time.",
  "You are enough.",
  "Let it go.",
  "Focus on now.",
  "This too shall pass.",
  "Trust the process.",
  "Be kind to yourself.",
  "Go touch some grass.",
  "Small progress is still progress.",
  "You got this.",
  "Breathe in, breathe out.",
  "Don't worry about tomorrow."
];

export const CALCULATOR_BUTTONS: CalcButtonDef[][] = [
  [
    { label: 'AC', type: 'secondary', action: 'clear' },
    { label: '+/-', type: 'secondary', action: 'message' },
    { label: '%', type: 'secondary', action: 'message' },
    { label: '÷', type: 'accent', action: 'message' },
  ],
  [
    { label: '7', type: 'primary', action: 'message' },
    { label: '8', type: 'primary', action: 'message' },
    { label: '9', type: 'primary', action: 'message' },
    { label: '×', type: 'accent', action: 'message' },
  ],
  [
    { label: '4', type: 'primary', action: 'message' },
    { label: '5', type: 'primary', action: 'message' },
    { label: '6', type: 'primary', action: 'message' },
    { label: '-', type: 'accent', action: 'message' },
  ],
  [
    { label: '1', type: 'primary', action: 'message' },
    { label: '2', type: 'primary', action: 'message' },
    { label: '3', type: 'primary', action: 'message' },
    { label: '+', type: 'accent', action: 'message' },
  ],
  [
    { label: '0', type: 'primary', action: 'message', span: 2 },
    { label: '.', type: 'primary', action: 'message' },
    { label: '=', type: 'accent', action: 'message' },
  ],
];
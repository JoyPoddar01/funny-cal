import React from 'react';
import { Calculator } from './components/Calculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4 font-sans text-slate-800">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-700 tracking-tight mb-2">
          Overthinking Calculator
        </h1>
        <p className="text-slate-500 text-sm">
          Calculate peace, not problems.
        </p>
      </header>

      <main className="w-full max-w-md">
        <Calculator />
      </main>

      <footer className="mt-12 text-slate-400 text-xs text-center">
        <p>© {new Date().getFullYear()} Emotional Support Device</p>
      </footer>
    </div>
  );
};

export default App;
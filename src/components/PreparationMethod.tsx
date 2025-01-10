import React from 'react';
import { CookingPot, Flame, Soup, Timer, Salad } from 'lucide-react';
import type { PreparationMethod } from '../types/Recipe';

interface PreparationMethodProps {
  selected: PreparationMethod;
  onChange: (method: PreparationMethod) => void;
}

const methods: Array<{
  value: PreparationMethod;
  label: string;
  icon: React.ReactNode;
}> = [
  { value: 'any', label: 'Any Method', icon: <CookingPot className="h-5 w-5" /> },
  { value: 'baked', label: 'Baked', icon: <Flame className="h-5 w-5" /> },
  { value: 'grilled', label: 'Grilled', icon: <Flame className="h-5 w-5" /> },
  { value: 'fried', label: 'Fried', icon: <Flame className="h-5 w-5" /> },
  { value: 'steamed', label: 'Steamed', icon: <Soup className="h-5 w-5" /> },
  { value: 'slow-cooked', label: 'Slow Cooked', icon: <Timer className="h-5 w-5" /> },
  { value: 'stir-fried', label: 'Stir Fried', icon: <Flame className="h-5 w-5" /> },
  { value: 'raw', label: 'Raw/Fresh', icon: <Salad className="h-5 w-5" /> },
];

export function PreparationMethod({ selected, onChange }: PreparationMethodProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-violet-700 mb-3">
        Preparation Method
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {methods.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium 
              transition-all duration-300 ${
                selected === value
                  ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-violet-700 hover:bg-white'
              }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import type { DietaryRestriction } from '../types/Recipe';

interface DietaryRestrictionsProps {
  selected: DietaryRestriction[];
  onChange: (restrictions: DietaryRestriction[]) => void;
}

export function DietaryRestrictions({ selected, onChange }: DietaryRestrictionsProps) {
  const restrictions: DietaryRestriction[] = [
    'vegan',
    'vegetarian',
    'gluten-free',
    'dairy-free',
    'nut-free',
    'keto',
  ];

  const toggleRestriction = (restriction: DietaryRestriction) => {
    if (selected.includes(restriction)) {
      onChange(selected.filter((r) => r !== restriction));
    } else {
      onChange([...selected, restriction]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {restrictions.map((restriction) => (
        <button
          key={restriction}
          onClick={() => toggleRestriction(restriction)}
          className={`px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300
            transform hover:scale-105 hover:-translate-y-1
            ${
              selected.includes(restriction)
                ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg'
                : 'bg-white/80 backdrop-blur-sm text-violet-700 border-2 border-violet-200 hover:border-violet-300'
            }`}
        >
          {restriction}
        </button>
      ))}
    </div>
  );
}
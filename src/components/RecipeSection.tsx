import React from 'react';
import { Clock, Users } from 'lucide-react';

interface RecipeSectionProps {
  time: string;
  servings: string;
  name: string;
}

export function RecipeSection({ time, servings, name }: RecipeSectionProps) {
  // Remove asterisks and clean up the text
  const cleanTime = time.replace(/\*/g, '').replace(/^\d+\.\s*/, '');
  const cleanServings = servings.replace(/\*/g, '').replace(/^\d+\.\s*/, '');

  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 
        bg-clip-text text-transparent mb-4">
        {name.replace(/^\d+\.\s*Recipe name:\s*/, '')}
      </h2>
      <div className="flex items-center justify-center gap-6 text-violet-600">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span>{cleanTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <span>{cleanServings}</span>
        </div>
      </div>
    </div>
  );
}
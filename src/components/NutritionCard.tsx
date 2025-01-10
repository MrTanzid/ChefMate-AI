import React from 'react';

interface NutritionCardProps {
  info: string;
}

export function NutritionCard({ info }: NutritionCardProps) {
  // Remove asterisks and clean up the text
  const cleanInfo = info.replace(/\*/g, '').trim();
  
  return (
    <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 
      rounded-2xl p-4 text-center shadow-sm
      transform hover:scale-105 transition-all duration-300">
      <span className="block text-sm text-violet-600">{cleanInfo}</span>
    </div>
  );
}
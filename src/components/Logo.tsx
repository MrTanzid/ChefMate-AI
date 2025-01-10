import React from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-3 group">
      <div className="relative">
        {/* Main chef hat */}
        <div className="relative transform group-hover:rotate-6 transition-all duration-300">
          <ChefHat className="w-14 h-14 text-violet-600" />
          {/* Decorative elements */}
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
          </div>
          {/* Glowing effect */}
          <div className="absolute inset-0 animate-ping opacity-30">
            <ChefHat className="w-14 h-14 text-fuchsia-500" />
          </div>
        </div>
      </div>
      
      {/* Text part */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 
          bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105
          font-sans-forgetica tracking-wide">
          ChefMate
        </h1>
        <span className="text-2xl font-sans-forgetica text-fuchsia-600 tracking-widest ml-auto -mt-1">
          AI
        </span>
      </div>
    </div>
  );
}
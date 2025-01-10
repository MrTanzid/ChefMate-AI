import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter ingredients (e.g., chicken, spinach, tomatoes)"
          className="w-full px-6 py-4 pl-14 text-lg bg-white/80 backdrop-blur-sm border-2 border-violet-200 rounded-2xl 
            focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 
            transition-all duration-300 shadow-lg hover:shadow-violet-100"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 h-6 w-6 
          group-hover:scale-110 transition-transform duration-300" />
      </div>
    </form>
  );
}
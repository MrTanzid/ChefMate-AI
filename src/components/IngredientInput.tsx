import React from 'react';
import { X } from 'lucide-react';

interface IngredientInputProps {
  ingredients: string[];
  onAdd: (ingredient: string) => void;
  onRemove: (index: number) => void;
}

export function IngredientInput({ ingredients, onAdd, onRemove }: IngredientInputProps) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type an ingredient and press Enter"
          className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 
            border-violet-200 rounded-2xl focus:outline-none focus:border-violet-400 
            focus:ring-4 focus:ring-violet-100 transition-all duration-300 
            shadow-lg hover:shadow-violet-100"
        />
      </form>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 
              text-violet-700 rounded-xl text-sm font-medium"
          >
            {ingredient}
            <button
              onClick={() => onRemove(index)}
              className="hover:text-violet-900 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
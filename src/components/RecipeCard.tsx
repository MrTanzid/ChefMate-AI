import React from 'react';
import { Clock, Users, Heart } from 'lucide-react';
import type { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onFavorite: (id: string) => void;
  isFavorite: boolean;
}

export function RecipeCard({ recipe, onFavorite, isFavorite }: RecipeCardProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden 
      transition-all duration-500 hover:shadow-2xl hover:shadow-violet-200 hover:-translate-y-2">
      <div className="relative h-56">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button
          onClick={() => onFavorite(recipe.id)}
          className="absolute top-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg
            transition-transform duration-300 hover:scale-110 hover:rotate-6"
        >
          <Heart
            className={`h-6 w-6 transition-colors duration-300 ${
              isFavorite ? 'fill-pink-500 text-pink-500' : 'text-violet-500'
            }`}
          />
        </button>
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">{recipe.name}</h3>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-violet-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-5 w-5" />
            <span className="text-sm font-medium">{recipe.servings} servings</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.dietaryTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-violet-100 to-fuchsia-100 
                text-violet-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 text-sm">
          {[
            { label: 'Calories', value: recipe.nutrition.calories },
            { label: 'Protein', value: `${recipe.nutrition.protein}g` },
            { label: 'Carbs', value: `${recipe.nutrition.carbs}g` },
            { label: 'Fat', value: `${recipe.nutrition.fat}g` },
          ].map(({ label, value }) => (
            <div key={label} className="text-center p-2 rounded-2xl bg-violet-50">
              <span className="block font-medium text-violet-900 mb-1">{label}</span>
              <span className="text-violet-700">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
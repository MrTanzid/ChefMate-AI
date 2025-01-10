import React from 'react';
import { ChefHat, Sparkles, Utensils } from 'lucide-react';
import { RecipeSection } from './RecipeSection';
import { NutritionCard } from './NutritionCard';

interface GeneratedRecipeProps {
  recipe: string | null;
  isLoading: boolean;
}

export function GeneratedRecipe({ recipe, isLoading }: GeneratedRecipeProps) {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <ChefHat className="w-16 h-16 text-violet-500 animate-bounce" />
            <div className="absolute inset-0 animate-ping opacity-30">
              <ChefHat className="w-16 h-16 text-fuchsia-500" />
            </div>
          </div>
          <p className="text-xl font-medium text-violet-700 dark:text-violet-300 animate-pulse">
            Cooking up your recipe...
          </p>
        </div>
      </div>
    );
  }

  if (!recipe) return null;

  // Parse the recipe text into sections
  const sections = {
    name: recipe.split('\n')
      .find(line => line.toLowerCase().includes('recipe name'))
      ?.replace(/.*recipe name:?\s*/i, '')
      ?.replace(/[""*]/g, '') || 'Recipe',
    time: recipe.split('\n')
      .find(line => line.toLowerCase().includes('time'))
      ?.replace(/.*time:?\s*/i, '')
      ?.replace(/[""*]/g, '') || '30 minutes',
    servings: recipe.split('\n')
      .find(line => line.toLowerCase().includes('servings'))
      ?.replace(/.*servings:?\s*/i, '')
      ?.replace(/[""*]/g, '') || 'Serves 4',
    ingredientsList: recipe
      .split('\n')
      .filter(line => {
        // Check if line is an ingredient (starts with number or bullet)
        const isIngredientLine = /^(?:\d+\.?\s+|\*\s+)(?:\d+\/?\d*\s+)?[a-zA-Z]/.test(line.trim());
        // Check if line contains nutrition information
        const isNutritionInfo = /calories|protein|carbs?|fat/i.test(line);
        // Return true only if it's an ingredient line and not nutrition info
        return isIngredientLine && !isNutritionInfo;
      })
      .map(line => line.replace(/^\d+\.?\s*|\*\s*/g, '').replace(/[""*]/g, '')),
    instructionsList: recipe
      .split('\n')
      .filter(line => !line.toLowerCase().includes('instructions:'))
      .filter(line => /^\d+\..*|^\*\s+\d+\..*/.test(line.trim()))
      .map(line => line.replace(/^\d+\.?\s*|\*\s*/g, '').replace(/[""*]/g, '')),
    nutritionList: recipe
      .split('\n')
      .filter(line => 
        /calories|protein|carbs?|fat/i.test(line.toLowerCase()) &&
        !/ingredients|instructions/i.test(line)
      )
      .map(line => line.replace(/^\d+\.?\s*|\*\s*/g, '').replace(/[""*]/g, ''))
      .filter(Boolean)
  };

  // Ensure we have nutrition information
  if (sections.nutritionList.length === 0) {
    sections.nutritionList = [
      'Calories: ~300-400 per serving',
      'Protein: ~15-20g',
      'Carbs: ~30-40g',
      'Fat: ~15-20g'
    ];
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 md:p-8 shadow-xl transition-colors duration-300">
        <RecipeSection 
          name={sections.name}
          time={sections.time}
          servings={sections.servings}
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Ingredients */}
          <div className="bg-violet-50 dark:bg-violet-900/30 rounded-2xl p-4 md:p-6 transition-colors duration-300">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-violet-700 dark:text-violet-300 mb-4">
              <Utensils className="h-5 w-5" />
              Ingredients
            </h3>
            <ul className="space-y-2">
              {sections.ingredientsList.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full 
                    bg-violet-200 dark:bg-violet-700 text-violet-700 dark:text-violet-200 
                    font-medium text-sm shrink-0">
                    {index + 1}
                  </span>
                  <span className="dark:text-violet-100">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/30 rounded-2xl p-4 md:p-6 transition-colors duration-300">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-fuchsia-700 dark:text-fuchsia-300 mb-4">
              <ChefHat className="h-5 w-5" />
              Instructions
            </h3>
            <ol className="space-y-4">
              {sections.instructionsList.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full 
                    bg-fuchsia-200 dark:bg-fuchsia-700 text-fuchsia-700 dark:text-fuchsia-200 
                    font-medium text-sm shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1 dark:text-fuchsia-100">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Nutrition */}
        <div className="mt-8">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-violet-700 dark:text-violet-300 mb-4">
            <Sparkles className="h-5 w-5" />
            Nutrition Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.nutritionList.map((info, index) => (
              <NutritionCard key={index} info={info} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
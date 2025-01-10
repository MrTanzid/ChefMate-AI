import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';
import { Logo } from './components/Logo';
import { IngredientInput } from './components/IngredientInput';
import { DietaryRestrictions } from './components/DietaryRestrictions';
import { PreparationMethod } from './components/PreparationMethod';
import { GeneratedRecipe } from './components/GeneratedRecipe';
import { generateRecipe } from './services/googleAI';
import type { DietaryRestriction, PreparationMethod as PrepMethod } from './types/Recipe';

export default function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState<DietaryRestriction[]>([]);
  const [preparationMethod, setPreparationMethod] = useState<PrepMethod>('any');
  const [generatedRecipe, setGeneratedRecipe] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleAddIngredient = (ingredient: string) => {
    setIngredients(prev => [...prev, ingredient]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) {
      alert('Please add at least one ingredient');
      return;
    }

    setIsLoading(true);
    try {
      const recipe = await generateRecipe(ingredients, dietaryRestrictions, preparationMethod);
      setGeneratedRecipe(recipe);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to generate recipe');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
      <div className="flex-grow bg-gradient-to-br from-violet-50 via-fuchsia-50 to-violet-50 dark:from-gray-900 dark:via-violet-950 dark:to-gray-900 transition-colors duration-300">
        <main className="container mx-auto px-4 py-12">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-6 w-6 text-yellow-500" />
              ) : (
                <Moon className="h-6 w-6 text-violet-600" />
              )}
            </button>
          </div>

          <div className="text-center mb-16">
            <Logo />
            <p className="text-lg text-violet-700 dark:text-violet-300 max-w-2xl mx-auto mt-4">
              Your AI-powered kitchen companion. Add ingredients, set preferences, and let our AI chef create 
              a delicious recipe just for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <IngredientInput
              ingredients={ingredients}
              onAdd={handleAddIngredient}
              onRemove={handleRemoveIngredient}
            />

            <PreparationMethod
              selected={preparationMethod}
              onChange={setPreparationMethod}
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <DietaryRestrictions
                selected={dietaryRestrictions}
                onChange={setDietaryRestrictions}
              />

              <button
                onClick={handleGenerateRecipe}
                disabled={isLoading || ingredients.length === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 
                  to-fuchsia-500 rounded-2xl text-white font-medium shadow-lg 
                  transition-all duration-300 hover:shadow-xl hover:shadow-violet-200 
                  hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="h-5 w-5" />
                Generate Recipe
              </button>
            </div>
          </div>

          <GeneratedRecipe recipe={generatedRecipe} isLoading={isLoading} />
        </main>
      </div>

      <footer className="w-full bg-white dark:bg-gray-900 py-4 transition-colors duration-300 mt-auto">
        <p className="text-center text-violet-600 dark:text-violet-400 opacity-75">
          © {new Date().getFullYear()} ChefMate AI - Created with ❤️ by{' '}
          <a 
            href="https://t.me/sp_mrt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-600 dark:text-fuchsia-400 hover:underline"
          >
            MrTanzid
          </a>
        </p>
      </footer>
    </div>
  );
}
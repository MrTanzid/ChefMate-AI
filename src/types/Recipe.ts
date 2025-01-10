export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  dietaryTags: DietaryRestriction[];
  category: PreparationMethod;
}

export type DietaryRestriction = 
  | 'vegan'
  | 'vegetarian'
  | 'gluten-free'
  | 'dairy-free'
  | 'nut-free'
  | 'keto';

export type PreparationMethod = 
  | 'baked'
  | 'grilled'
  | 'fried'
  | 'steamed'
  | 'slow-cooked'
  | 'stir-fried'
  | 'raw'
  | 'any';
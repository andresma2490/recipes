import { Routes } from '@angular/router';

export const RECIPE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/recipe-list/recipe-list.component').then(
        (c) => c.RecipeListComponent
      )
  },
  {
    path: ':recipeId',
    loadComponent: () =>
      import('./pages/recipe-detail/recipe-detail.component').then(
        (c) => c.RecipeDetailComponent
      )
  }
];

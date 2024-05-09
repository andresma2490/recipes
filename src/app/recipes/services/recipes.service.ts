import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category, CategoryObjList } from '../models/category';
import {
  Recipe,
  RecipeByCategory,
  RecipeByCategoryObjList,
  RecipeObjList
} from '../models/recipe';
import { BehaviorSubject, map } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.API_URL}/${environment.API_VERSION}`;
  public recipes = signal<Recipe[] | RecipeByCategory[]>([]);

  constructor() {}

  searchRecipes(params: { s: string }) {
    return this.http
      .get<RecipeObjList>(`${this.apiUrl}/search.php`, {
        params
      })
      .pipe(map((res) => res.meals))
      .subscribe((recipes) => {
        this.recipes.set(recipes);
      });
  }

  getCategories() {
    return this.http
      .get<CategoryObjList>(`${this.apiUrl}/categories.php`)
      .pipe(map((res) => res.categories));
  }

  getRecipesByCategory(params: { c: string }) {
    return this.http
      .get<RecipeByCategoryObjList>(`${this.apiUrl}/filter.php`, {
        params
      })
      .pipe(map((res) => res.meals))
      .subscribe((recipes) => {
        this.recipes.set(recipes);
      });
  }

  getRecipeById(params: { i: number }) {
    return this.http
      .get<RecipeObjList>(`${this.apiUrl}/lookup.php`, {
        params
      })
      .pipe(map((res) => res.meals[0]));
  }

  getIngredients(recipe: Recipe) {
    const data: Ingredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const strIngredient = recipe[`strIngredient${i}` as keyof Recipe];
      const strMeasure = recipe[`strMeasure${i}` as keyof Recipe];
      if (strIngredient) {
        data.push({ strIngredient, strMeasure });
      }
    }
    return data;
  }
}

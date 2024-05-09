import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Category } from '../../models/category';
import { RecipesComponentsModule } from '../../components/recipes-components.module';
import { Recipe, RecipeByCategory } from '../../models/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipesComponentsModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
  categories: Category[] = [];
  recipes = this.recipesService.recipes;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getRecipesByCategory('Dessert');
  }

  getCategories() {
    this.recipesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getRecipesByCategory(category: string) {
    this.recipesService.getRecipesByCategory({ c: category });
  }

  searchRecipes(keyword: string) {
    this.recipesService.searchRecipes({ s: keyword });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Observable, map, switchMap } from 'rxjs';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipeId$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('recipeId')))
  );
  recipe$: Observable<Recipe> = this.recipeId$.pipe(
    switchMap((id) => this.recipesService.getRecipeById({ i: id }))
  );
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.recipe$.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}

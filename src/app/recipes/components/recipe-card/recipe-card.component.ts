import { Component, Input } from '@angular/core';
import { Recipe, RecipeByCategory } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe!: RecipeByCategory;
}

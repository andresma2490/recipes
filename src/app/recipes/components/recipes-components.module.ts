import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecipeCardComponent, CategoryCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [RecipeCardComponent, CategoryCardComponent]
})
export class RecipesComponentsModule {}

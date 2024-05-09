import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Output() categorySelected = new EventEmitter<Category>();
}

import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { RecipesService } from '../../../recipes/services/recipes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  searchControl: FormControl = new FormControl('');

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(900))
      .subscribe((value) => {
        this.recipesService.searchRecipes({ s: value });
      });
  }
}

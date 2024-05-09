import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { RecipesService } from '../../../recipes/services/recipes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  searchControl: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        tap(() => {
          const homeUrl = '/recipes';
          if (this.router.url !== homeUrl) {
            this.router.navigateByUrl(homeUrl);
          }
        }),
        debounceTime(700)
      )
      .subscribe((value) => {
        this.recipesService.searchRecipes({ s: value });
      });
  }
}

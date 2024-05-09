import { Routes } from '@angular/router';
import { BaseComponent } from './shared/layouts/base/base.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'recipes',
        loadChildren: () =>
          import('./recipes/recipes.routes').then((m) => m.RECIPE_ROUTES)
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      )
  }
];

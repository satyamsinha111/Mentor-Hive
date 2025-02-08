import { Routes } from '@angular/router';
import { PublicRoutes } from './shared/enums/routes.enum';

export const routes: Routes = [
  {
    path: PublicRoutes.Login.replace('/', ''),
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: PublicRoutes.Signup.replace('/', ''),
    loadComponent: () =>
      import('./features/auth/signup/signup.component').then(
        (m) => m.SignupComponent,
      ),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

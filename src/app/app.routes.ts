import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './common/home/home.component';
import { authGuard } from './guard/auth.guard';
import { homeGuard } from './guard/home.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [authGuard],
    component: LoginComponent,
  },
  {
    path: 'signup',
    canActivate: [authGuard],
    component: SignupComponent,
  },
  {
    path: '',
    canActivate: [homeGuard],
    component: HomeComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./client/client.routes').then((m) => m.CLIENT_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

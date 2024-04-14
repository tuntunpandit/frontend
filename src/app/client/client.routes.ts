import { Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

export const CLIENT_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: ClientDashboardComponent,
      },
      {
        path: 'profile',
        component: ClientProfileComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

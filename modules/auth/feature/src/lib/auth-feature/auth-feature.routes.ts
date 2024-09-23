import { Route } from '@angular/router';
import { AuthFeatureComponent } from './auth-feature.component';

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthFeatureComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in',
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import('../sign-in/sign-in.component').then((c) => c.SignInComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('../sign-up/sign-up.component').then((c) => c.SignUpComponent),
      },
    ],
  },
];

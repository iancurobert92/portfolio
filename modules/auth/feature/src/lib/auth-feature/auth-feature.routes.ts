import { Route } from '@angular/router';
import { authFeatureGuard } from './auth-feature.guard';

export const authRoutes: Route[] = [
  {
    path: '',
    canActivateChild: [authFeatureGuard],
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

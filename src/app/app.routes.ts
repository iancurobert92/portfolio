import { Route } from '@angular/router';
import { anonGuard, authGuard } from '@portfolio/auth-data-access';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [anonGuard],
    loadComponent: () =>
      import('@portfolio/welcome-feature').then(
        (c) => c.WelcomeFeatureComponent
      ),
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@portfolio/auth-feature').then((r) => r.authRoutes),
  },
  {
    path: 'contacts',
    canActivate: [anonGuard],
    loadComponent: () =>
      import('@portfolio/contacts-feature').then(
        (c) => c.ContactsFeatureComponent
      ),
  },
];

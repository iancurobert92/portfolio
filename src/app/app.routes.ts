import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@portfolio/welcome-feature').then(
        (c) => c.WelcomeFeatureComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@portfolio/auth-feature').then((r) => r.authRoutes),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('@portfolio/contacts-feature').then(
        (c) => c.ContactsFeatureComponent
      ),
  },
];

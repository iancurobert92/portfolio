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
    path: 'login',
    loadComponent: () =>
      import('@portfolio/auth-feature').then((c) => c.AuthFeatureComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('@portfolio/contacts-feature').then(
        (c) => c.ContactsFeatureComponent
      ),
  },
];

import { Route } from '@angular/router';
import { WelcomeFeatureComponent } from '@portfolio/welcome-feature';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomeFeatureComponent,
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('@portfolio/contacts-feature').then(
        (c) => c.ContactsFeatureComponent
      ),
  },
];

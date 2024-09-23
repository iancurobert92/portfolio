import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_pxQQzNwqb-yMrGrMvizPJXjL-aLp0xg',
  authDomain: 'portfolio-d70d3.firebaseapp.com',
  projectId: 'portfolio-d70d3',
  storageBucket: 'portfolio-d70d3.appspot.com',
  messagingSenderId: '760874682887',
  appId: '1:760874682887:web:ab990f915b19408ae7b8a2',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
};

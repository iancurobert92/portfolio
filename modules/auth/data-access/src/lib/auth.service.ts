import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  userSig = signal<string | null | undefined>(undefined);

  signUp(email: string, password: string): Observable<UserCredential> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );

    return from(promise);
  }

  signIn(email: string, password: string): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );

    return from(promise);
  }

  signOut(): Observable<void> {
    const promise = signOut(this.firebaseAuth);

    return from(promise);
  }
}

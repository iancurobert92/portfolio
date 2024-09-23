/* tslint:disable:no-unused-variable */

import { inject } from '@angular/core/testing';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { MockBuilder } from 'ng-mocks';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

jest.mock('@angular/fire/auth', () => {
  return {
    Auth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    user: jest.fn(() => of(null)),
  };
});

describe('Service: Auth', () => {
  beforeEach(() => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (signOut as jest.Mock).mockResolvedValue(undefined);
    (user as jest.Mock).mockReturnValue(of(null));

    return MockBuilder(AuthService)
      .mock(AuthService, {
        signIn: () => of({} as UserCredential),
      })
      .mock(Auth);
  });

  it('should create', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { AuthService } from '@portfolio/auth-data-access';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { SignInComponent } from './sign-in.component';

jest.mock('@angular/fire/auth', () => {
  return {
    Auth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    user: jest.fn(() => of(null)),
  };
});

describe('SignInComponent', () => {
  beforeEach(() => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (signOut as jest.Mock).mockResolvedValue(undefined);
    (user as jest.Mock).mockReturnValue(of(null));

    return MockBuilder(SignInComponent)
      .mock(AuthService, {
        signIn: () => of({} as UserCredential),
      })
      .mock(Auth);
  });

  it('should create', () => {
    const fixture = MockRender(SignInComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });
});

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth';
import { AuthService } from '@portfolio/auth-data-access';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

jest.mock('@angular/fire/auth', () => {
  return {
    Auth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
    user: jest.fn(() => of(null)),
  };
});

describe('AppComponent', () => {
  beforeEach(async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({});
    (signOut as jest.Mock).mockResolvedValue(undefined);
    (user as jest.Mock).mockReturnValue(of(null));

    return MockBuilder(AppComponent)
      .mock(AuthService, {
        user$: of(null),
      })
      .mock(Auth);
  });

  it(`should create`, () => {
    const fixture = MockRender(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

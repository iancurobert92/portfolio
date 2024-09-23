import { TestBed } from '@angular/core/testing';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { AuthService } from '@portfolio/auth-data-access';
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
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue(
      {} as UserCredential
    );
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue(
      {} as UserCredential
    );
    (signOut as jest.Mock).mockResolvedValue(undefined);
    (user as jest.Mock).mockReturnValue(of(null));

    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [AuthService, { provide: Auth, useValue: {} }],
    }).compileComponents();
  });

  it(`should create`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from '@portfolio/auth-ui';
import { Router } from '@angular/router';
import { AuthService } from '@portfolio/auth-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-sign-in',
  standalone: true,
  imports: [CommonModule, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  errorMessage: string | null = null;

  onFormSubmit(data: { email: string; password: string }) {
    console.log(data);

    this.authService
      .signIn(data.email, data.password)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err) => {
          this.errorMessage = err.code;
        },
      });
  }
}

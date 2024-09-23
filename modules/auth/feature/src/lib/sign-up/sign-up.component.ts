import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '@portfolio/auth-ui';
import { AuthService } from '@portfolio/auth-data-access';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [CommonModule, SignUpFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  errorMessage: string | null = null;

  onFormSubmit(data: { email: string; password: string }) {
    this.authService
      .signUp(data.email, data.password)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (err) => {
          this.errorMessage = err.code;
        },
      });
  }
}

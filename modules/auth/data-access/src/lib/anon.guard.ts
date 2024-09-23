import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export const anonGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.user$.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigateByUrl('/auth/sign-in');
        return false;
      }
    })
  );
};

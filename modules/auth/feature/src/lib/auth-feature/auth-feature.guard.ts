import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@portfolio/auth-data-access';
import { map } from 'rxjs';

export const authFeatureGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.user$.pipe(
    map((user) => {
      router.navigateByUrl('/');
      if (user) {
        return false;
      } else {
        return true;
      }
    })
  );
};

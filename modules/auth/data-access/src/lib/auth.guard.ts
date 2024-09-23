import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.user$.pipe(
    map((user) => {
      if (user) {
        router.navigateByUrl('/');
        return false;
      } else {
        return true;
      }
    })
  );
};

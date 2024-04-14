import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const isUserLoggedIn = authService.isUserLoggedin();
  const router = inject(Router);
  if (isUserLoggedIn) {
    console.log(isUserLoggedIn);

    return true;
  } else {
    console.log(isUserLoggedIn);
    router.navigate(['/login']);
    return false;
  }
};

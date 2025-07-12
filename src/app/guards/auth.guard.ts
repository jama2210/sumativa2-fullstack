import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const userRole = localStorage.getItem('userRole');
  const userEmail = localStorage.getItem('userEmail');
  return !!userRole && !!userEmail;
};
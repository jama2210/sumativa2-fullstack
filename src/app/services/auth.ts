import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
private role: 'admin' | 'cliente' = 'cliente';

  login(email: string, password: string): boolean {
    if (email === 'admin@admin.com') {
      this.role = 'admin';
    } else {
      this.role = 'cliente';
    }
    localStorage.setItem('userRole', this.role);
    return true;
  }

  getRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  logout() {
    localStorage.removeItem('userRole');
  }
}

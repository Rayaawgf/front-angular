import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('admin') === 'true';
    if (!isAdmin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

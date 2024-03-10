import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserResponse } from '../models/user-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkInitialAuthState());

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        catchError(this.handleError<UserResponse>('login')),
        tap((response: UserResponse) => {
          localStorage.setItem('id', response.id.toString());
          localStorage.setItem('username', response.username);
          localStorage.setItem('admin', response.admin.toString()); // Ensure this is correctly set
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('isLoggedIn', 'true');
          this.isLoggedInSubject.next(true);
        })
      );
  }


  register(username: string, email: string, password: string): Observable<UserResponse> {
    const requestBody = { username, email, password };
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, requestBody)
      .pipe(
        catchError(this.handleError<UserResponse>('register'))
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  private checkInitialAuthState(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

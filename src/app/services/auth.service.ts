import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserResponse } from '../models/user-response';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
    // Check local storage for user data on service initialization
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.isLoggedIn = true;
    }
  }

  login(username: string, password: string): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        catchError(this.handleError<UserResponse>('login')),
        tap((response: UserResponse) => {
          // Store user details in local storage separately
          localStorage.setItem('id', response.id.toString());
          localStorage.setItem('username', response.username);
          localStorage.setItem('admin', response.admin.toString());
          // Store the entire user object
          localStorage.setItem('user', JSON.stringify(response));
          // Set isLoggedIn to true
          localStorage.setItem('isLoggedIn', 'true');
          this.isLoggedIn = true;
        })
      );
  }  

  register(username: string, email: string, password: string): Observable<UserResponse> {
    const user: UserResponse = { id: 0, username, admin: false }; // Assuming default values for registration
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, user)
      .pipe(
        catchError(this.handleError<UserResponse>('register'))
      );
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.isLoggedIn);
  }

  logout(): void {
    // Remove user details from local storage
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('admin');
    localStorage.removeItem('user'); // Remove the entire user object
    // Update isLoggedIn status
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

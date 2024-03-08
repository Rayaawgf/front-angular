import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth'; // Remplacez cela par votre URL d'API

  constructor(private http: HttpClient , private router: Router) { }

  /** Connexion utilisateur */
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        catchError(this.handleError<User>('login'))
      );
  }

  /** Enregistrement utilisateur */
  register(username: string, email: string, password: string): Observable<User> {
    const user: User = {  username, email, password };
    return this.http.post<User>(`${this.apiUrl}/register`, user)
      .pipe(
        catchError(this.handleError<User>('register'))
      );
  }


  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/isAuthenticated`)
      .pipe(
        catchError(this.handleError<boolean>('isAuthenticated', false))
      );
  }

  logout(): void {
    
    this.router.navigate(['/login']);
  }

  /** Gestion des erreurs HTTP */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

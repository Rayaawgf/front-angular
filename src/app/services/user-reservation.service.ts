import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReservation } from '../models/user-reservation';

@Injectable({
  providedIn: 'root'
})
export class UserReservationService {
  private apiUrl = 'http://localhost:8081/api/reservation'; // Assurez-vous de mettre le bon URL du backend

  constructor(private http: HttpClient) { }

  reserveTicket(reservation: UserReservation): Observable<any> {
    return this.http.post<any>(this.apiUrl, reservation);
  }
}

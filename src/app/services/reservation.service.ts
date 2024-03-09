import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReservation } from '../models/user-reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  reserveTicket(userReservation: UserReservation): Observable<UserReservation> {
    return this.http.post<UserReservation>(this.baseUrl + '/reservation', userReservation);
  }

  getAllReservations(): Observable<UserReservation[]> {
    return this.http.get<UserReservation[]>(this.baseUrl + '/reservations');
  }
}
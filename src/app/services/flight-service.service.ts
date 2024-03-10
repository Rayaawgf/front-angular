import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  getAllCompanies() {
    throw new Error('Method not implemented.');
  }

  readonly baseUrl = 'https://rimbestprice-spring.onrender.com/api/flights';

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseUrl);
  }

  getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${id}`);
  }

  addFlight(flight: Flight): Observable<any> {
    return this.http.post(this.baseUrl, flight);
  }

  updateFlight(id: number, flight: Flight): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, flight);
  }

  deleteFlight(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

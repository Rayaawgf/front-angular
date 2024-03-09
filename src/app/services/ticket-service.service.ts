import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Flight } from '../models/flight'; // Importez le modèle de vol

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8081/api/tickets';
  private flightApiUrl = 'http://localhost:8081/api/flights'; // URL pour les vols

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  addTicket(ticket: Ticket): Observable<any> {
    return this.http.post<any>(this.apiUrl, ticket);
  }

  updateTicket(id: number, ticket: Ticket): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  findCheapestTickets(searchCriteria: any): Observable<Ticket[]> {
    const params = new HttpParams({
      fromObject: searchCriteria
    });
    return this.http.get<Ticket[]>(`${this.apiUrl}/search`, { params });
  }

  getAllFlights(): Observable<Flight[]> { // Méthode pour récupérer tous les vols
    return this.http.get<Flight[]>(this.flightApiUrl);
  }
}

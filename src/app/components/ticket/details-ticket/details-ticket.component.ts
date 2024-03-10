// detail-ticket.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../services/ticket-service.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserReservation } from 'src/app/models/user-reservation';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-detail-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit {
  ticketId!: number; 
  ticketDetails: any;
  reservations: UserReservation[] = []; // Ajout d'un initialisateur pour 'reservations'
  newReservation: UserReservation = {
    userId: null!,
    ticketId: null!,
    reservationDate: null!};

  constructor(private route: ActivatedRoute, private ticketService: TicketService, private reservationService: ReservationService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.ticketId = +id;
        this.getTicketDetails(this.ticketId);
      }
    });
  }

  getTicketDetails(ticketId: number) {
    this.ticketService.getTicketById(ticketId).subscribe((data: any) => {
      this.ticketDetails = data;
    });
  }


  reserveTicket() {
    // Fetch user ID from local storage
    const userIdFromStorage = localStorage.getItem('id');
  
    // Check if userId exists in local storage and is not null
    if (!userIdFromStorage) {
      console.error('User ID not found in local storage. Redirecting to login.');
  
      // Save the route the user attempted to access
      localStorage.setItem('redirectAfterLogin', this.router.url);
  
      // Redirect to login page
      this.router.navigate(['/login']);
      return;
    }
  
    // Prepare the reservation with the current ticketId, the userId from storage, and the current date/time
    const reservation: UserReservation = {
      userId: +userIdFromStorage, // Convert string to number
      ticketId: this.ticketId,
      reservationDate: new Date() // Sets to the current date/time
    };
  
    // Make the reservation
    this.reservationService.reserveTicket(reservation).subscribe({
      next: (data) => {
        console.log('Reservation successful:', data);
        // Navigate to the reservations list page
        this.router.navigate(['/reservations']);
      },
      error: (error) => {
        console.error('Error reserving ticket:', error);
      }
    });
  }



}
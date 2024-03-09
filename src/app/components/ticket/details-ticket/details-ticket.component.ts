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
    this.reservationService.reserveTicket(this.newReservation).subscribe(
      data => {
        console.log('Reservation successful:', data);
        // Réinitialiser la nouvelle réservation après la réussite
        this.newReservation = {
          userId: null!,
          ticketId: null!,
          reservationDate: null!
        };
        // Recharger la liste des réservations
        this.router.navigate(['/reservations']);
        
      },
      error => {
        console.error('Error reserving ticket:', error);
      }
    );
  }



}
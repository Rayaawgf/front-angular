import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { UserReservation } from '../../models/user-reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: UserReservation[] = [];
  newReservation: UserReservation = {
    userId: null!,
    ticketId: null!,
    reservationDate: null!
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAllReservations().subscribe(
      data => {
        this.reservations = data;
      },
      error => {
        console.log('Error fetching reservations:', error);
      }
    );
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
        this.loadReservations();
      },
      error => {
        console.error('Error reserving ticket:', error);
      }
    );
  }

}

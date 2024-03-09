import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { UserReservation } from '../../models/user-reservation';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  userReservation!: UserReservation;
  reservations!: UserReservation[];

  constructor(private reservationService: ReservationService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
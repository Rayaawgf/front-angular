import { User } from './user';
import { Ticket } from './ticket';
import { Flight } from './flight'; // Assurez-vous d'importer correctement le modèle Flight

export class UserReservation {

    userId: number;
    ticketId: number;
    reservationDate: Date;

    constructor(userId: number, ticketId: number, reservationDate: Date) {
        this.userId = userId;
        this.ticketId = ticketId;
        this.reservationDate = reservationDate;
    } 
    
}

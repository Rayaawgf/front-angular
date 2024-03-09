import { User } from './user';
import { Ticket } from './ticket';
import { Flight } from './flight'; // Assurez-vous d'importer correctement le modèle Flight

export class UserReservation {

    userId: User;
    ticketId: Ticket;
    reservationDate: Date;

    constructor(userId: User, ticketId: Ticket, reservationDate: Date) {
        this.userId = userId;
        this.ticketId = ticketId;
        this.reservationDate = reservationDate;
    } 
    
}

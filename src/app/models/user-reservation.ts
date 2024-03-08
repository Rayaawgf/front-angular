import { User } from './user';
import { Ticket } from './ticket';
import { Flight } from './flight'; // Assurez-vous d'importer correctement le modèle Flight

export class UserReservation {

    user: User;
    ticket: Ticket;
    reservationTime: Date;

    constructor(user: User, ticket: Ticket, reservationTime: Date) {
        this.user = user;
        this.ticket = ticket;
        this.reservationTime = reservationTime;
    }

   
    toString(): string {
        return `UserReservation{ user=${this.user.id}, ticket=${this.ticket.ticketNumber}, reservationTime=${this.reservationTime}}`;
    }
}

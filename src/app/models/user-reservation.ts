import { User } from './user';
import { Ticket } from './ticket';

export class UserReservation {

    user: User;
    ticket: Ticket;
    reservationTime: Date;

    constructor(user: User, ticket: Ticket, reservationTime: Date) {
        this.user = user;
        this.ticket = ticket;
        this.reservationTime = reservationTime;
    }

    canModifyReservation(): boolean {
        const timeDifference = new Date().getTime() - this.ticket.flight.departureDate.getTime();
        return timeDifference <= 48 * 60 * 60 * 1000;
    }

    toString(): string {
        return `UserReservation{ user=${this.user.id}, ticket=${this.ticket.ticketNumber}, reservationTime=${this.reservationTime}}`;
    }
}

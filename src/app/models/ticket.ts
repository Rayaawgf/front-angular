import { TicketClass } from './class.enum';
import { Flight } from './flight';
import { UserReservation } from './user-reservation';

export class Ticket {
    ticketNumber: string;
    price: number;
    ticketClass: TicketClass;
    numberOfTicketsAvailable: number;
    flight: Flight;
    creationTime: Date;
    reservations: UserReservation[];

    constructor(ticketNumber: string, price: number, ticketClass: TicketClass, numberOfTicketsAvailable: number, flight: Flight, creationTime: Date, reservations: UserReservation[]) {
        this.ticketNumber = ticketNumber;
        this.price = price;
        this.ticketClass = ticketClass;
        this.numberOfTicketsAvailable = numberOfTicketsAvailable;
        this.flight = flight;
        this.creationTime = creationTime;
        this.reservations = reservations;
    }

    canModifyTicket(): boolean {
        const timeDifference = new Date().getTime() - this.creationTime.getTime();
        return timeDifference <= 48 * 60 * 60 * 1000;
    }
}

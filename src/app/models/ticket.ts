import { TicketClass } from './class.enum';

export class Ticket {
  constructor(
    public id: number,
    public ticketNumber: string,
    public price: number,
    public ticketClass: TicketClass,
    public numberOfTicketsAvailable: number,
    public flightId: number,
    public creationTime: Date,
   
  ) {}
}

import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket-service.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getAllTickets()
      .subscribe(
        tickets => {
          this.tickets = tickets;
        },
        error => {
          console.error('Error loading tickets:', error);
          // Handle error
        }
      );
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id)
      .subscribe(
        () => {
          console.log('Ticket deleted successfully');
          this.loadTickets(); // Refresh ticket list
        },
        error => {
          console.error('Error deleting ticket:', error);
          // Handle error
        }
      );
  }

}

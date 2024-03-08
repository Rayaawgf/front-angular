import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket-service.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  ticketForm: FormGroup;
  error: string | undefined;
  ticket: Ticket | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.ticketForm = this.formBuilder.group({
      ticketNumber: ['', Validators.required],
      price: [0, Validators.required],
      ticketClass: [null, Validators.required],
      numberOfTicketsAvailable: [0, Validators.required],
      flight: [null, Validators.required],
      creationTime: [new Date(), Validators.required],
      reservations: [[]]
    });
  }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.params['id'];
    this.loadTicket(ticketId);
  }

  loadTicket(id: number): void {
    this.ticketService.getTicketById(id).subscribe(
      ticket => {
        this.ticket = ticket;
        this.ticketForm.patchValue({
          ticketNumber: ticket.ticketNumber,
          price: ticket.price,
          ticketClass: ticket.ticketClass,
          numberOfTicketsAvailable: ticket.numberOfTicketsAvailable,
          flight: ticket.flightId,
          creationTime: ticket.creationTime,
         
        });
      },
      error => {
        this.error = 'Erreur lors du chargement du ticket';
      }
    );
  }

  updateTicket(): void {
    if (this.ticket) {
      const updatedTicket: Ticket = { ...this.ticket, ...this.ticketForm.value };
      this.ticketService.updateTicket(this.ticket.id, updatedTicket).subscribe(
        () => {
          // Ticket mis à jour avec succès, effectuez des actions supplémentaires si nécessaire
          this.router.navigate(['/list-ticket']);
        },
        error => {
          this.error = 'Erreur lors de la mise à jour du ticket';
        }
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket-service.service';
import { TicketClass } from '../../../models/class.enum';
import { Flight } from '../../../models/flight';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticketForm: FormGroup;
  error: string | undefined;
  flights: Flight[] = [];

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.ticketForm = this.formBuilder.group({
      ticketNumber: ['', Validators.required],
      price: [0, Validators.required],
      ticketClass: [TicketClass.ECONOMY, Validators.required],
      numberOfTicketsAvailable: [0, Validators.required],
      flightId: [Validators.required],
      creationTime: [new Date(), Validators.required],
      
    });
  }

  ngOnInit(): void {
    // Vous pouvez charger les vols ici depuis un service si nécessaire
  }

  createTicket(): void {
    const ticket: Ticket = this.ticketForm.value;

    this.ticketService.addTicket(ticket).subscribe(
      () => {
        console.log('Ticket créé avec succès.');
        // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
      },
      error => {
        console.error('Erreur lors de la création du ticket :', error);
        this.error = 'Erreur lors de la création du ticket';
      }
    );
  }
}

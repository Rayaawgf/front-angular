import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket-service.service';
import { TicketClass } from '../../../models/class.enum';
import { Flight } from '../../../models/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticketForm: FormGroup;
  error: string | undefined;
  flights: Flight[] = [];

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService, private router: Router) {
    this.ticketForm = this.formBuilder.group({
      flightId: ['', Validators.required],
      ticketNumber: ['', Validators.required],
      price: [0, Validators.required],
      ticketClass: [TicketClass.ECONOMY, Validators.required],
      numberOfTicketsAvailable: [0, Validators.required],
      creationTime: [new Date(), Validators.required],  
    });
  }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.ticketService.getAllFlights().subscribe(
      (flights: Flight[]) => { // Spécifiez le type de données pour "flights" comme un tableau de Flight
        this.flights = flights;
      },
      error => {
        console.error('Erreur lors du chargement des vols :', error);
        // Gérer l'erreur
      }
    );
  }
  

  createTicket(): void {
    if (this.ticketForm.valid) {
      const ticket: Ticket = this.ticketForm.value;

      this.ticketService.addTicket(ticket).subscribe(
        () => {
          console.log('Ticket créé avec succès.');
          this.router.navigate(['/tickets']);
        },
        error => {
          console.error('Erreur lors de la création du ticket :', error);
          this.error = 'Erreur lors de la création du ticket';
        }
      );
    } else {
      // Afficher des messages d'erreur si le formulaire est invalide
      Object.keys(this.ticketForm.controls).forEach(controlName => {
        this.ticketForm.get(controlName)?.markAsTouched();
      });
    }
  }
}
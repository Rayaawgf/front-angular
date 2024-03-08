import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket-service.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchForm: FormGroup;
  cheapestTickets: Ticket[] = [];

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.searchForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      ticketClass: ['', Validators.required]
    });
  }

  searchTickets(): void {
    const searchCriteria = this.searchForm.value;
    this.ticketService.findCheapestTickets(searchCriteria).subscribe(
      tickets => {
        this.cheapestTickets = tickets;
      },
      error => {
        console.error('Error fetching cheapest tickets:', error);
        // Gérer l'erreur
      }
    );
  }
}
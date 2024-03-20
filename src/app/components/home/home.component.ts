import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket-service.service';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  cheapestTickets: Ticket[] = [];
  showNoResultPopup: boolean = false; // Controls the visibility of the no-result popup

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.searchForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      ticketClass: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  searchTickets(): void {
    this.showNoResultPopup = false; // Reset popup visibility
    const searchCriteria = this.searchForm.value;
    this.ticketService.findCheapestTickets(searchCriteria).subscribe(
      tickets => {
        this.cheapestTickets = tickets;
        if (this.cheapestTickets.length > 0) {
          // Delay scrolling to ensure the DOM has updated
          setTimeout(() => {
            document.getElementById('cheapestTicketsSection')?.scrollIntoView({ behavior: 'smooth' });
          }, 100); // Adjust the timeout as needed
        } else {
          // If no tickets are found, show the no-result popup
          this.showNoResultPopup = true;
        }
      },
      error => {
        console.error('Error fetching cheapest tickets:', error);
      }
    );
  }
}

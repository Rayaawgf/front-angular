import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../services/flight-service.service';
import { Flight } from '../../../models/flight';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {
  
  flights!: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

  loadFlights(): void {
    this.flightService.getAllFlights()
      .subscribe(
        flights => {
          this.flights = flights;
        },
        error => {
          console.error('Error loading flights:', error);
          // Handle error
        }
      );
  }

  deleteFlight(id: number): void {
    this.flightService.deleteFlight(id)
      .subscribe(
        () => {
          console.log('Flight deleted successfully');
          this.loadFlights(); // Refresh flight list
        },
        error => {
          console.error('Error deleting flight:', error);
          // Handle error
        }
      );
  }

}

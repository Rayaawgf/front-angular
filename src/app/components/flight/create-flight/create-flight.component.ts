import { Component } from '@angular/core';
import { FlightService } from '../../../services/flight-service.service';
import { Flight } from '../../../models/flight';
import { CompanyAerienne } from '../../../models/company-aerienne';
@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {

  newFlight: Flight = new Flight('', '', '', new Date(), new Date(), 0, new CompanyAerienne(0,''));

  constructor(private flightService: FlightService) { }

  createFlight(): void {
    this.flightService.addFlight(this.newFlight)
      .subscribe(
        response => {
          console.log('Flight created successfully:', response);
          // Optionally, you can reset the newFlight object here
          this.newFlight = new Flight('', '', '', new Date(), new Date(), 0, new CompanyAerienne(0,''));
        },
        error => {
          console.error('Error creating flight:', error);
          // Handle error
        }
      );
  }
}

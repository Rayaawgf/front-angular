import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../../../models/flight';
import { FlightService } from '../../../services/flight-service.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  flightForm: FormGroup;
  flightId!: number;
  error: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.flightForm = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      companyId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightId = params['id'];
      this.loadFlight(this.flightId);
    });
  }

  loadFlight(id: number): void {
    this.flightService.getFlightById(id).subscribe(
      (flight: Flight) => {
        this.flightForm.patchValue({
          flightNumber: flight.flightNumber,
          departureCity: flight.departureCity,
          arrivalCity: flight.arrivalCity,
          departureDate: flight.departureDate,
          arrivalDate: flight.arrivalDate,
          companyId: flight.companyAerienneId
        });
      },
      error => {
        this.error = 'Error loading flight';
      }
    );
  }

  updateFlight(): void {
    const { flightNumber, departureCity, arrivalCity, departureDate, arrivalDate, companyId } = this.flightForm.value;
    const updatedFlight = new Flight(this.flightId, flightNumber, departureCity, arrivalCity, departureDate, arrivalDate, companyId, []);
    
    this.flightService.updateFlight(this.flightId, updatedFlight).subscribe(
      () => {
        console.log('Flight updated successfully');
        this.router.navigate(['/flights']); // Rediriger vers la liste des vols après la mise à jour
      },
      error => {
        this.error = 'Error updating flight';
      }
    );
  }
}

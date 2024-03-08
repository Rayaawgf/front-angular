import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../../models/flight';
import { CompanyAerienne } from '../../../models/company-aerienne';
import { FlightService } from '../../../services/flight-service.service';
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
  flightForm: FormGroup;
  companies: CompanyAerienne[] = [];
  newFlight: Flight | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private companyService: CompanyAerienneService,
    private router: Router
  ) {
    this.flightForm = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      companyAerienneId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe(
      companies => {
        this.companies = companies;
      },
      error => {
        console.error('Error loading companies:', error);
        // Gérer l'erreur
      }
    );
  }

  createFlight(): void {
    const { id, flightNumber, departureCity, arrivalCity, departureDate, arrivalDate, companyAerienneId } = this.flightForm.value;
    
    this.newFlight = new Flight(
      id,
      flightNumber,
      departureCity,
      arrivalCity,
      departureDate,
      arrivalDate,
      companyAerienneId,
      []
    );

    this.flightService.addFlight(this.newFlight)
      .subscribe(
        response => {
          console.log('Flight created successfully:', response);
          this.router.navigate(['/flights']);
        },
        error => {
          console.error('Error creating flight:', error);
          // Gérer l'erreur
        }
      );
  }
}
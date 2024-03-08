import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../../../models/flight';
import { FlightService } from '../../../services/flight-service.service';
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service'; // Import du service de compagnie aérienne
import { CompanyAerienne } from '../../../models/company-aerienne';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {

  flightForm: FormGroup;
  error: string | undefined;
  companies: CompanyAerienne[] = []; // Initialisation de la liste des compagnies

  constructor(
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private companyAerienneService: CompanyAerienneService // Injection du service de compagnie aérienne
  ) {
    this.flightForm = this.formBuilder.group({
      flightNumber: ['', Validators.required],
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      price: [0, Validators.required],
      companyAerienne: [null]
    });

    // Récupération des compagnies aériennes lors de l'initialisation du composant
    this.retrieveCompanies();
  }

  createFlight(): void {
    const flight: Flight = this.flightForm.value;
    this.flightService.addFlight(flight).subscribe(
      () => {
        // Actions en cas de succès
      },
      error => {
        this.error = 'Erreur lors de la création du vol';
      }
    );
  }

  // Méthode pour récupérer les compagnies aériennes
  retrieveCompanies(): void {
    this.companyAerienneService.getAllCompanies().subscribe(
      (companies: CompanyAerienne[]) => {
        this.companies = companies;
      },
      error => {
        // Gestion des erreurs de récupération des compagnies aériennes
        console.error('Erreur lors de la récupération des compagnies aériennes:', error);
      }
    );
  }
}

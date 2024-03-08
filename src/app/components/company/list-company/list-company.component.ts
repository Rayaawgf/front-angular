import { Component, OnInit } from '@angular/core';
import { CompanyAerienne } from '../../../models/company-aerienne';
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  companies: CompanyAerienne[] = [];
  error: string | undefined;

  constructor(private companyService: CompanyAerienneService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getAllCompanies().subscribe(
      companies => {
        this.companies = companies;
      },
      error => {
        this.error = 'Une erreur s\'est produite lors du chargement des compagnies aériennes.';
      }
    );
  }

  deleteCompany(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette compagnie aérienne?')) {
      this.companyService.deleteCompany(id).subscribe(
        () => {
          this.loadCompanies();
        },
        error => {
          this.error = 'Une erreur s\'est produite lors de la suppression de la compagnie aérienne.';
        }
      );
    }
  }
}

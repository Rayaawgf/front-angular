import { Component, OnInit } from '@angular/core';
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service';

import { CompanyAerienne } from '../../../models/company-aerienne';
@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  
  companies!: CompanyAerienne[];

  constructor(private companyService: CompanyAerienneService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getAllCompanies()
      .subscribe(
        companies => {
          this.companies = companies;
        },
        error => {
          console.error('Error loading companies:', error);
          // Handle error
        }
      );
  }

  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id)
      .subscribe(
        () => {
          console.log('Company deleted successfully');
          this.loadCompanies(); // Refresh company list
        },
        error => {
          console.error('Error deleting company:', error);
          // Handle error
        }
      );
  }

}

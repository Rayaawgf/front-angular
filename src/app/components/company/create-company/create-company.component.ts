import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyAerienne } from '../../../models/company-aerienne';
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  companyForm: FormGroup;
  error: string | undefined;

  constructor(private formBuilder: FormBuilder, private companyService: CompanyAerienneService) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  createCompany(): void {
    const { name, code } = this.companyForm.value;
    const newCompany = new CompanyAerienne(0, name, code);

    this.companyService.addCompany(newCompany).subscribe(
      () => {
        // Company créée avec succès, effectuez des actions supplémentaires si nécessaire
      },
      error => {
        // Gérer les erreurs lors de la création de la compagnie
        this.error = 'Erreur lors de la création de la compagnie';
      }
    );
  }
}

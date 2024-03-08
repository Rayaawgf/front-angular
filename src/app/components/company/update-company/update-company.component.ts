import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyAerienne } from '../../../models/company-aerienne'; // Assurez-vous d'importer le modèle correct
import { CompanyAerienneService } from '../../../services/company-aerienne-service.service'; // Assurez-vous d'importer le service correct

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  companyId: number;

  companyForm: FormGroup;
  error: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyAerienneService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.companyId = 0; // Initialisation dans le constructeur

    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = params['id'];
      this.companyService.getCompanyById(this.companyId).subscribe(
        (company: CompanyAerienne) => {
          this.companyForm.patchValue({
            name: company.name,
            code: company.code
          });
        },
        error => {
          this.error = 'Erreur lors de la récupération des données de la compagnie';
        }
      );
    });
  }

  updateCompany(): void {
    const { name, code } = this.companyForm.value;
    const updatedCompany = new CompanyAerienne(this.companyId, name, code);

    this.companyService.updateCompany(this.companyId, updatedCompany).subscribe(
      () => {
        // Company mise à jour avec succès, effectuez des actions supplémentaires si nécessaire
        this.router.navigate(['/companies']); // Rediriger vers la liste des compagnies
      },
      error => {
        // Gérer les erreurs lors de la mise à jour de la compagnie
        this.error = 'Erreur lors de la mise à jour de la compagnie';
      }
    );
  }
}

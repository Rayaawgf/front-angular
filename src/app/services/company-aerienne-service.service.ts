import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyAerienne } from '../models/company-aerienne';

@Injectable({
  providedIn: 'root'
})
export class CompanyAerienneService {

  private baseUrl = 'http://localhost:8081/api/company-aeriennes'; // Assurez-vous que l'URL correspond à votre backend

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<CompanyAerienne[]> {
    return this.http.get<CompanyAerienne[]>(this.baseUrl);
  }

  getCompanyById(id: number): Observable<CompanyAerienne> {
    return this.http.get<CompanyAerienne>(`${this.baseUrl}/${id}`);
  }

  addCompany(companyAerienne: CompanyAerienne): Observable<any> {
    return this.http.post(this.baseUrl, companyAerienne);
  }

  updateCompany(id: number, companyAerienne: CompanyAerienne): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, companyAerienne);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

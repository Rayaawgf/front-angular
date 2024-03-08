import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ListFlightComponent } from './components/flight/list-flight/list-flight.component';
import { UpdateFlightComponent } from './components/flight/update-flight/update-flight.component';
import { CreateFlightComponent } from './components/flight/create-flight/create-flight.component';
import { CreateTicketComponent } from './components/ticket/create-ticket/create-ticket.component';
import { ListTicketComponent } from './components/ticket/list-ticket/list-ticket.component';
import { UpdateTicketComponent } from './components/ticket/update-ticket/update-ticket.component';
import { CreateCompanyComponent } from './components/company/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/company/update-company/update-company.component';
import { ListCompanyComponent } from './components/company/list-company/list-company.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Assuming you want the dashboard as the default route
  { path: 'dashbord', component: DashbordComponent }, // Assuming you want the dashboard as the default route
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'flights', component: ListFlightComponent },
  { path: 'flights/create', component: CreateFlightComponent },
  { path: 'update/:id', component: UpdateFlightComponent }, // Using a parameter for flight ID
  { path: 'tickets/create', component: CreateTicketComponent },
  { path: 'tickets', component: ListTicketComponent },
  { path: 'tickets/:id/edit', component: UpdateTicketComponent }, // Using a parameter for ticket ID
  { path: 'companies', component: ListCompanyComponent },
  { path: 'companies/create', component: CreateCompanyComponent },
  { path: 'update-compa/:id', component: UpdateCompanyComponent }, // Using a parameter for company ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

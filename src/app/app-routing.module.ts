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
import { DetailsTicketComponent } from './components/ticket/details-ticket/details-ticket.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  // Public routes
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details-ticket/:id', component: DetailsTicketComponent, canActivate: [AuthGuard] },

  // Admin routes
  { path: 'dashbord', component: DashbordComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'flights', component: ListFlightComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'flights/create', component: CreateFlightComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'update/:id', component: UpdateFlightComponent, canActivate: [AuthGuard, AdminGuard] }, 
  { path: 'tickets/create', component: CreateTicketComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'tickets', component: ListTicketComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'update-tick/:id', component: UpdateTicketComponent, canActivate: [AuthGuard, AdminGuard] }, 
  { path: 'companies', component: ListCompanyComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'companies/create', component: CreateCompanyComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'update-compa/:id', component: UpdateCompanyComponent, canActivate: [AuthGuard, AdminGuard] },

  // Non-admin authenticated routes
  { path: 'details-ticket/:id', component: DetailsTicketComponent, canActivate: [AuthGuard] },
  { path: 'reservations', component: ReservationComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

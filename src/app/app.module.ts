import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsTicketComponent } from './components/ticket/details-ticket/details-ticket.component';







@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ListFlightComponent,
    UpdateFlightComponent,
    CreateFlightComponent,
    CreateTicketComponent,
    ListTicketComponent,
    UpdateTicketComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    ListCompanyComponent,
    DashbordComponent,
    NavbarComponent,
    HomeComponent,
    DetailsTicketComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

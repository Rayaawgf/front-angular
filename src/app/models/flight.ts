import { CompanyAerienne } from './company-aerienne';

export class Flight {
    flightNumber: string;
    departureCity: string;
    arrivalCity: string;
    departureDate: Date;
    arrivalDate: Date;
    price: number;
    companyAerienne?: CompanyAerienne;

    constructor(
        flightNumber: string,
        departureCity: string,
        arrivalCity: string,
        departureDate: Date,
        arrivalDate: Date,
        price: number,
        companyAerienne: CompanyAerienne
    ) {
        this.flightNumber = flightNumber;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.price = price;
        this.companyAerienne = companyAerienne;
    }
}

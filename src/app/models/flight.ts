export class Flight {
  constructor(
    public id: number,
    public flightNumber: string,
    public departureCity: string,
    public arrivalCity: string,
    public departureDate: Date,
    public arrivalDate: Date,
    public companyAerienneId: number,
    public tickets: any[]
  ) {}
}
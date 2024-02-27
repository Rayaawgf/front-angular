import { UserReservation } from './user-reservation';
export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    reservations: UserReservation[] = [];

    constructor(id : number ,username: string, email: string, password: string) {
        this.id = id ;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = false; // Par défaut, l'utilisateur n'est pas un admin
    }
}

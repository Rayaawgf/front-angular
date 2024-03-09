import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RimBestPrice';
  constructor(library: FaIconLibrary, private authService: AuthService) {
    library.addIcons(faEdit, faTrashAlt, faArrowLeft); // Add specific icons you want to use
  }
  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isLoggedIn => {
      console.log('Authentication status:', isLoggedIn);
    });
  }
}

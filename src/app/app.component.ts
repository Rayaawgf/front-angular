import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RimBestPrice';
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faTrashAlt); // Add specific icons you want to use
  }
}

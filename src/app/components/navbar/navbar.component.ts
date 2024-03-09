import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(authenticated => {
      this.isLoggedIn = authenticated;
      // Now, also check for admin status here
      this.updateAdminStatus();
      this.cdRef.detectChanges(); // Ensure updates are reflected in the template
    });
  }

  updateAdminStatus() {
    if (this.isLoggedIn) {
      const isAdminStr = localStorage.getItem('admin');
      this.isAdmin = isAdminStr === 'true';
    } else {
      this.isAdmin = false; // Ensure isAdmin is false if not logged in
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false; // Manually update the isLoggedIn state
    this.isAdmin = false; // Reset admin status on logout
    this.router.navigate(['/login']);
    // No need to manually trigger change detection here as navigation will cause component reload
  }
  

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isModalOpen: boolean = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

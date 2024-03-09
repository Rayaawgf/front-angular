import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  error: string | undefined;

  constructor(private formBuilder: FormBuilder, private authService: AuthService , private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
  
    this.authService.login(username, password).subscribe({
      next: () => {
        // Check if there's a saved redirect path in local storage
        const redirectPath = localStorage.getItem('redirectAfterLogin');
        if (redirectPath) {
          // Redirect to the saved path and remove it from local storage
          this.router.navigateByUrl(redirectPath);
          localStorage.removeItem('redirectAfterLogin');
        } else {
          // Proceed with the usual admin or non-admin redirection
          const isAdmin = localStorage.getItem('admin') === 'true';
          if (isAdmin) {
            // Redirect to the dashboard if the user is an admin
            this.router.navigate(['/flights']);
          } else {
            // Redirect to the home page for non-admin users
            this.router.navigate(['']);
          }
        }
      },
      error: () => {
        // Handle login error
        this.error = 'Invalid username or password';
      }
    });
  }  
  
}

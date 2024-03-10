import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;
  error!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(): void {
    const username = this.registrationForm.value.username;
    const email = this.registrationForm.value.email;
    const password = this.registrationForm.value.password;
  
    this.authService.register(username, email, password).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        if (error.error && error.error.message) {
          this.error = error.error.message;
        } else {
          this.error = 'An error occurred during registration. Please try again later.';
        }
      }
    );
  }
  
}

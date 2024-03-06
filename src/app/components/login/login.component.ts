import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  error: string | undefined;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      () => {
        // Connexion réussie, rediriger ou effectuer d'autres actions nécessaires
      },
      error => {
        // Gérer l'erreur de connexion
        this.error = 'Invalid username or password';
      }
    );
  }
}

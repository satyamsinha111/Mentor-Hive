import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutes } from '../../../shared/enums/routes.enum';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected loginForm: FormGroup;
  protected PublicRoutes = PublicRoutes;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      role: ['', Validators.required], // Mentor or Mentee
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { role, email, password } = this.loginForm.value;
      console.log('Login Data:', { role, email, password });

      // Simulating role-based navigation
      if (role === 'mentor') {
        this.router.navigate(['/mentor-dashboard']);
      } else {
        this.router.navigate(['/mentee-dashboard']);
      }
    }
  }
}

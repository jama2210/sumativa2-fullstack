import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html'
})
export class login {
  form: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.form.value;

    // Simulación de login
    if (email === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      this.router.navigate(['/profile']);
    } else if (email === 'cliente@cliente.com' && password === 'cliente') {
      localStorage.setItem('userRole', 'cliente');
      this.router.navigate(['/profile']);
    } else {
      this.errorMsg = 'Credenciales inválidas';
    }
  }
}

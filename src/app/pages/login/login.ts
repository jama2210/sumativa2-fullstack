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
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuario = usuarios.find((u: any) => u.email === email && u.password === password);

    if (usuario) {
      // Simulación de roles según nombre
      const rol = usuario.nombre.toLowerCase().includes('admin') ? 'admin' : 'cliente';
      localStorage.setItem('userRole', rol);
      localStorage.setItem('userEmail', usuario.email);
      this.router.navigate(['/profile']);
    } else {
      this.errorMsg = 'Credenciales inválidas';
    }
  }
}


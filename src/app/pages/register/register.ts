import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  standalone: true
})
export class register {
  form: FormGroup;
  success = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/(?=.*[A-Z])/),
          Validators.pattern(/(?=.*[a-z])/),
          Validators.pattern(/(?=.*\d)/),
          Validators.pattern(/(?=.*[\W_])/),
        ]
      ]
    });
  }

  submit() {
    if (this.form.valid) {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      usuarios.push(this.form.value);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.success = true;
      setTimeout(() => this.router.navigate(['/login']), 2000);
    }
  }
}



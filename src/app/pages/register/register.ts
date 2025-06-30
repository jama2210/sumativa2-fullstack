import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class register{
  form: FormGroup;
  success = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Usuario registrado:', this.form.value);
      this.success = true;

      // Espera 2 segundos y redirige al login
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
}



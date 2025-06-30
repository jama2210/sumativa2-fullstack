// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   imports: [],
//   templateUrl: './forgot-password.html',
//   styleUrl: './forgot-password.css'
// })
// export class ForgotPassword {

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ForgotPassword {
  form: FormGroup;
  success = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Recuperar contraseña para:', this.form.value.email);
      this.success = true;

      // Simulación: redirige al login luego de mostrar mensaje
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
}


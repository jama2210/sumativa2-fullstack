import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class Profile implements OnInit {
  form: FormGroup;
  saved = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      edad: ['']
    });
  }

  ngOnInit() {
    // Simulación: cargar datos del "usuario"
    const usuario = {
      nombre: 'Juan Pérez',
      email: 'cliente@cliente.com',
      telefono: '987654321',
      edad: '30'
    };
    this.form.patchValue(usuario);
  }

  guardar() {
    if (this.form.valid) {
      console.log('Perfil actualizado:', this.form.value);
      this.saved = true;

      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  }
}

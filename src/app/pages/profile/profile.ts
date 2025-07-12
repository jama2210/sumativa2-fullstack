  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { DataService } from '../../services/data.services';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule]
  })

  export class Profile implements OnInit {
  form: FormGroup;
  saved = false;
  clases: any[] = [];
  userIndex = -1; // para identificar qué usuario editar

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      edad: ['']
    });
  }

  ngOnInit() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const currentEmail = this.getCurrentUserEmail();

    const index = usuarios.findIndex((u: any) => u.email === currentEmail);
    this.userIndex = index;

    if (index !== -1) {
      this.form.patchValue(usuarios[index]);
    }

    // 👇 Cargar las clases del JSON
    this.dataService.getClases().subscribe({
      next: (data) => this.clases = data, 
      error: (err) => console.error('Error al cargar clases:', err)
    });
  }

  guardar() {
    if (this.form.valid && this.userIndex !== -1) {
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      usuarios[this.userIndex] = this.form.value;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.saved = true;

      setTimeout(() => {
        this.saved = false;
      }, 3000);
    }
  }

  logout() {
  localStorage.removeItem('userRole');
  localStorage.removeItem('userEmail');
  // localStorage.clear();
  window.location.href = '/login'; // redirecciona
}

  private getCurrentUserEmail(): string {
    // Puedes almacenar el email al hacer login, así:
    // localStorage.setItem('userEmail', email);
    return localStorage.getItem('userEmail') || '';
  }
}

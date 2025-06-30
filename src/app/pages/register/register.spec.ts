import { ComponentFixture, TestBed } from '@angular/core/testing';
import { register } from './register';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('register', () => {
  let component: register;
  let fixture: ComponentFixture<register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [register, ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(register);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el formulario inválido al inicio', () => {
    expect(component.form.valid).toBeFalse();
  });

  it('debería ser válido si se llenan los campos', () => {
    component.form.setValue({
      nombre: 'Juan',
      email: 'juan@mail.com',
      password: '1234'
    });
    expect(component.form.valid).toBeTrue();
  });
});

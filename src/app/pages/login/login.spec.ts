import { ComponentFixture, TestBed } from '@angular/core/testing';
import { login } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('login', () => {
  let component: login;
  let fixture: ComponentFixture<login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [login, ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('formulario inválido al inicio', () => {
    expect(component.form.valid).toBeFalse();
  });
});

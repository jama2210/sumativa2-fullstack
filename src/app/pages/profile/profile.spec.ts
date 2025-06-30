import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from './profile';
import { ReactiveFormsModule } from '@angular/forms';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería inicializar el formulario con datos simulados', () => {
    expect(component.form.get('nombre')?.value).toBe('Juan Pérez');
    expect(component.form.get('email')?.value).toBe('cliente@cliente.com');
  });
});


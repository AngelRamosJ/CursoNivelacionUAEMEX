import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosHiperbolaComponent } from './ejercicios-hiperbola.component';

describe('EjerciciosHiperbolaComponent', () => {
  let component: EjerciciosHiperbolaComponent;
  let fixture: ComponentFixture<EjerciciosHiperbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosHiperbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosHiperbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

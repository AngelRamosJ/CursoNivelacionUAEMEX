import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosCircunferenciaComponent } from './ejercicios-circunferencia.component';

describe('EjerciciosCircunferenciaComponent', () => {
  let component: EjerciciosCircunferenciaComponent;
  let fixture: ComponentFixture<EjerciciosCircunferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosCircunferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosCircunferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesCuadraticasComponent } from './ecuaciones-cuadraticas.component';

describe('EcuacionesCuadraticasComponent', () => {
  let component: EcuacionesCuadraticasComponent;
  let fixture: ComponentFixture<EcuacionesCuadraticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuacionesCuadraticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesCuadraticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

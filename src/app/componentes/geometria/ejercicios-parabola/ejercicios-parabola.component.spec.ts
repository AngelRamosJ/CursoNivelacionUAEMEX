import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosParabolaComponent } from './ejercicios-parabola.component';

describe('EjerciciosParabolaComponent', () => {
  let component: EjerciciosParabolaComponent;
  let fixture: ComponentFixture<EjerciciosParabolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosParabolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosParabolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

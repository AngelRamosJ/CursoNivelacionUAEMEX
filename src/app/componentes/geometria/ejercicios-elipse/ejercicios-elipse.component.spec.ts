import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosElipseComponent } from './ejercicios-elipse.component';

describe('EjerciciosElipseComponent', () => {
  let component: EjerciciosElipseComponent;
  let fixture: ComponentFixture<EjerciciosElipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosElipseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosElipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

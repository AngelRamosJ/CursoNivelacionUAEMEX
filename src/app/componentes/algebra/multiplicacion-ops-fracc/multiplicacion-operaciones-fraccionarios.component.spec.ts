import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionOperacionesFraccionariosComponent } from './multiplicacion-operaciones-fraccionarios.component';

describe('MultiplicacionOperacionesFraccionariosComponent', () => {
  let component: MultiplicacionOperacionesFraccionariosComponent;
  let fixture: ComponentFixture<MultiplicacionOperacionesFraccionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicacionOperacionesFraccionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacionOperacionesFraccionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

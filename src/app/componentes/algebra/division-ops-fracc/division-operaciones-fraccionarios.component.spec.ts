import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionOperacionesFraccionariosComponent } from './division-operaciones-fraccionarios.component';

describe('DivisionOperacionesFraccionariosComponent', () => {
  let component: DivisionOperacionesFraccionariosComponent;
  let fixture: ComponentFixture<DivisionOperacionesFraccionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionOperacionesFraccionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionOperacionesFraccionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

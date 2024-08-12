import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionOperacionesEnterosComponent } from './division-operaciones-enteros.component';

describe('DivisionOperacionesEnterosComponent', () => {
  let component: DivisionOperacionesEnterosComponent;
  let fixture: ComponentFixture<DivisionOperacionesEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionOperacionesEnterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionOperacionesEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

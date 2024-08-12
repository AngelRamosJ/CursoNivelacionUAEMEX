import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionPolinomiosComponent } from './multiplicacion-polinomios.component';

describe('MultiplicacionPolinomiosComponent', () => {
  let component: MultiplicacionPolinomiosComponent;
  let fixture: ComponentFixture<MultiplicacionPolinomiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicacionPolinomiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacionPolinomiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

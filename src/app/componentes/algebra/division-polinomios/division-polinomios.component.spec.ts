import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPolinomiosComponent } from './division-polinomios.component';

describe('DivisionPolinomiosComponent', () => {
  let component: DivisionPolinomiosComponent;
  let fixture: ComponentFixture<DivisionPolinomiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionPolinomiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionPolinomiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

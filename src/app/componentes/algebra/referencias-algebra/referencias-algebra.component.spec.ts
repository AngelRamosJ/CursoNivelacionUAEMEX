import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasAlgebraComponent } from './referencias-algebra.component';

describe('ReferenciasAlgebraComponent', () => {
  let component: ReferenciasAlgebraComponent;
  let fixture: ComponentFixture<ReferenciasAlgebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasAlgebraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasAlgebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

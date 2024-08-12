import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasGeometriaComponent } from './referencias-geometria.component';

describe('ReferenciasGeometriaComponent', () => {
  let component: ReferenciasGeometriaComponent;
  let fixture: ComponentFixture<ReferenciasGeometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasGeometriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasGeometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

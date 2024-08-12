import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesTriDeterminantesComponent } from './sistemas-ecuaciones-tri-determinantes.component';

describe('SistemasEcuacionesTriDeterminantesComponent', () => {
  let component: SistemasEcuacionesTriDeterminantesComponent;
  let fixture: ComponentFixture<SistemasEcuacionesTriDeterminantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesTriDeterminantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesTriDeterminantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

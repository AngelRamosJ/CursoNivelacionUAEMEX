import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesBiDeterminantesComponent } from './sistemas-ecuaciones-bi-determinantes.component';

describe('SistemasEcuacionesBiDeterminantesComponent', () => {
  let component: SistemasEcuacionesBiDeterminantesComponent;
  let fixture: ComponentFixture<SistemasEcuacionesBiDeterminantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesBiDeterminantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesBiDeterminantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

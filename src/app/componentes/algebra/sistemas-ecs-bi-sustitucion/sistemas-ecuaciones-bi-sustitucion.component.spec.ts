import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesBiSustitucionComponent } from './sistemas-ecuaciones-bi-sustitucion.component';

describe('SistemasEcuacionesBiSustitucionComponent', () => {
  let component: SistemasEcuacionesBiSustitucionComponent;
  let fixture: ComponentFixture<SistemasEcuacionesBiSustitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesBiSustitucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesBiSustitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

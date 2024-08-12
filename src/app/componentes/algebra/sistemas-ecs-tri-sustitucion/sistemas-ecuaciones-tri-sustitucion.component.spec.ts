import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesTriSustitucionComponent } from './sistemas-ecuaciones-tri-sustitucion.component';

describe('SistemasEcuacionesTriSustitucionComponent', () => {
  let component: SistemasEcuacionesTriSustitucionComponent;
  let fixture: ComponentFixture<SistemasEcuacionesTriSustitucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesTriSustitucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesTriSustitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

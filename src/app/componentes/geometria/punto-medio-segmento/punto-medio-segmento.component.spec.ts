import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoMedioSegmentoComponent } from './punto-medio-segmento.component';

describe('PuntoMedioSegmentoComponent', () => {
  let component: PuntoMedioSegmentoComponent;
  let fixture: ComponentFixture<PuntoMedioSegmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoMedioSegmentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoMedioSegmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

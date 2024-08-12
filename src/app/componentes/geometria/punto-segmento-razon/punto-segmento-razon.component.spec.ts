import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoSegmentoRazonComponent } from './punto-segmento-razon.component';

describe('PuntoSegmentoRazonComponent', () => {
  let component: PuntoSegmentoRazonComponent;
  let fixture: ComponentFixture<PuntoSegmentoRazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoSegmentoRazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoSegmentoRazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

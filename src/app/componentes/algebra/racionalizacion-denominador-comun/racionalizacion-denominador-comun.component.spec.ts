import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacionalizacionDenominadorComunComponent } from './racionalizacion-denominador-comun.component';

describe('RacionalizacionDenominadorComunComponent', () => {
  let component: RacionalizacionDenominadorComunComponent;
  let fixture: ComponentFixture<RacionalizacionDenominadorComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacionalizacionDenominadorComunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacionalizacionDenominadorComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

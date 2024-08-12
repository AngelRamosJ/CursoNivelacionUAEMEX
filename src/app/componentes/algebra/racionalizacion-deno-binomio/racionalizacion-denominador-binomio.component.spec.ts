import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacionalizacionDenominadorBinomioComponent } from './racionalizacion-denominador-binomio.component';

describe('RacionalizacionDenominadorBinomioComponent', () => {
  let component: RacionalizacionDenominadorBinomioComponent;
  let fixture: ComponentFixture<RacionalizacionDenominadorBinomioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacionalizacionDenominadorBinomioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacionalizacionDenominadorBinomioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

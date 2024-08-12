import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorComunAgrupadoComponent } from './factor-comun-agrupado.component';

describe('FactorComunAgrupadoComponent', () => {
  let component: FactorComunAgrupadoComponent;
  let fixture: ComponentFixture<FactorComunAgrupadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorComunAgrupadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorComunAgrupadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

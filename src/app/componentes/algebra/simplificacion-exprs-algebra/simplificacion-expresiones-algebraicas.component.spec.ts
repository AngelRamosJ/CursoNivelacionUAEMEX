import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplificacionExpresionesAlgebraicasComponent } from './simplificacion-expresiones-algebraicas.component';

describe('SimplificacionExpresionesAlgebraicasComponent', () => {
  let component: SimplificacionExpresionesAlgebraicasComponent;
  let fixture: ComponentFixture<SimplificacionExpresionesAlgebraicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplificacionExpresionesAlgebraicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplificacionExpresionesAlgebraicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

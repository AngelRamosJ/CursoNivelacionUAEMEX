import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaPotenciasIgualesComponent } from './diferencia-potencias-iguales.component';

describe('DiferenciaPotenciasIgualesComponent', () => {
  let component: DiferenciaPotenciasIgualesComponent;
  let fixture: ComponentFixture<DiferenciaPotenciasIgualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaPotenciasIgualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaPotenciasIgualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

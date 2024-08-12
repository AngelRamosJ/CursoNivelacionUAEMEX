import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaPuntoRectaComponent } from './distancia-punto-recta.component';

describe('DistanciaPuntoRectaComponent', () => {
  let component: DistanciaPuntoRectaComponent;
  let fixture: ComponentFixture<DistanciaPuntoRectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanciaPuntoRectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaPuntoRectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

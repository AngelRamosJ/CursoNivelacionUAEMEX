import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanciaDosPuntosComponent } from './distancia-dos-puntos.component';

describe('DistanciaDosPuntosComponent', () => {
  let component: DistanciaDosPuntosComponent;
  let fixture: ComponentFixture<DistanciaDosPuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanciaDosPuntosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanciaDosPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

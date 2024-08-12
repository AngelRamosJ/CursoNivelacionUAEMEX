import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomioPerfectoAdicionSustraccionComponent } from './trinomio-perfecto-adicion-sustraccion.component';

describe('TrinomioPerfectoAdicionSustraccionComponent', () => {
  let component: TrinomioPerfectoAdicionSustraccionComponent;
  let fixture: ComponentFixture<TrinomioPerfectoAdicionSustraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinomioPerfectoAdicionSustraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomioPerfectoAdicionSustraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesLogaritmosComponent } from './propiedades-logaritmos.component';

describe('PropiedadesLogaritmosComponent', () => {
  let component: PropiedadesLogaritmosComponent;
  let fixture: ComponentFixture<PropiedadesLogaritmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesLogaritmosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesLogaritmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

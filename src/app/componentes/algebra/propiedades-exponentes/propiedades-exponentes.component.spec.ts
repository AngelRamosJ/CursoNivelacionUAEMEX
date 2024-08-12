import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesExponentesComponent } from './propiedades-exponentes.component';

describe('PropiedadesExponentesComponent', () => {
  let component: PropiedadesExponentesComponent;
  let fixture: ComponentFixture<PropiedadesExponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesExponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesExponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

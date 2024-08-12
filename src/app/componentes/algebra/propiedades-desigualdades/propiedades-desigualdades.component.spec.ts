import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesDesigualdadesComponent } from './propiedades-desigualdades.component';

describe('PropiedadesDesigualdadesComponent', () => {
  let component: PropiedadesDesigualdadesComponent;
  let fixture: ComponentFixture<PropiedadesDesigualdadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesDesigualdadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesDesigualdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

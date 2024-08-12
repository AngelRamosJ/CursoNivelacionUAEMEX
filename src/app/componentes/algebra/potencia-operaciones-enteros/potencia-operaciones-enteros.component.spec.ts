import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotenciaOperacionesEnterosComponent } from './potencia-operaciones-enteros.component';

describe('PotenciaOperacionesEnterosComponent', () => {
  let component: PotenciaOperacionesEnterosComponent;
  let fixture: ComponentFixture<PotenciaOperacionesEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotenciaOperacionesEnterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotenciaOperacionesEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

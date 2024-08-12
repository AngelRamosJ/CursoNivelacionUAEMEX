import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacinoesTrignometricasComponent } from './ecuacinoes-trignometricas.component';

describe('EcuacinoesTrignometricasComponent', () => {
  let component: EcuacinoesTrignometricasComponent;
  let fixture: ComponentFixture<EcuacinoesTrignometricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuacinoesTrignometricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacinoesTrignometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

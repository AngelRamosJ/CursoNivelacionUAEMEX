import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionOperacionesEnterosComponent } from './multiplicacion-operaciones-enteros.component';

describe('MultiplicacionOperacionesEnterosComponent', () => {
  let component: MultiplicacionOperacionesEnterosComponent;
  let fixture: ComponentFixture<MultiplicacionOperacionesEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicacionOperacionesEnterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacionOperacionesEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

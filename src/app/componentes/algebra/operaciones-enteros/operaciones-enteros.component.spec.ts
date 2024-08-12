import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesEnterosComponent } from './operaciones-enteros.component';

describe('OperacionesEnterosComponent', () => {
  let component: OperacionesEnterosComponent;
  let fixture: ComponentFixture<OperacionesEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesEnterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

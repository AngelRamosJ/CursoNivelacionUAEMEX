import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadesTrigonometricasComponent } from './identidades-trigonometricas.component';

describe('IdentidadesTrigonometricasComponent', () => {
  let component: IdentidadesTrigonometricasComponent;
  let fixture: ComponentFixture<IdentidadesTrigonometricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadesTrigonometricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadesTrigonometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresionesTrigonometricasComponent } from './expresiones-trigonometricas.component';

describe('ExpresionesTrigonometricasComponent', () => {
  let component: ExpresionesTrigonometricasComponent;
  let fixture: ComponentFixture<ExpresionesTrigonometricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpresionesTrigonometricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpresionesTrigonometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

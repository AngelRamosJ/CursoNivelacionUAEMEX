import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSumaDiferenciaComponent } from './producto-suma-diferencia.component';

describe('ProductoSumaDiferenciaComponent', () => {
  let component: ProductoSumaDiferenciaComponent;
  let fixture: ComponentFixture<ProductoSumaDiferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoSumaDiferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoSumaDiferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosNotablesComponent } from './productos-notables.component';

describe('ProductosNotablesComponent', () => {
  let component: ProductosNotablesComponent;
  let fixture: ComponentFixture<ProductosNotablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosNotablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosNotablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

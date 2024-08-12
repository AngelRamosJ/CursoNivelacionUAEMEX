import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomioCuadradoComponent } from './binomio-cuadrado.component';

describe('BinomioCuadradoComponent', () => {
  let component: BinomioCuadradoComponent;
  let fixture: ComponentFixture<BinomioCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinomioCuadradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinomioCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

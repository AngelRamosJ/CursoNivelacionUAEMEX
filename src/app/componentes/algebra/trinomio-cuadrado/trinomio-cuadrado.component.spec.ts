import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomioCuadradoComponent } from './trinomio-cuadrado.component';

describe('TrinomioCuadradoComponent', () => {
  let component: TrinomioCuadradoComponent;
  let fixture: ComponentFixture<TrinomioCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinomioCuadradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomioCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomioPerfectoComponent } from './trinomio-perfecto.component';

describe('TrinomioPerfectoComponent', () => {
  let component: TrinomioPerfectoComponent;
  let fixture: ComponentFixture<TrinomioPerfectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinomioPerfectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomioPerfectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

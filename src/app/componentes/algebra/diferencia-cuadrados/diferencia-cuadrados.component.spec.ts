import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaCuadradosComponent } from './diferencia-cuadrados.component';

describe('DiferenciaCuadradosComponent', () => {
  let component: DiferenciaCuadradosComponent;
  let fixture: ComponentFixture<DiferenciaCuadradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaCuadradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaCuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

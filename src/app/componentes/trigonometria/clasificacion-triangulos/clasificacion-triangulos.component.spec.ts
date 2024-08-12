import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionTriangulosComponent } from './clasificacion-triangulos.component';

describe('ClasificacionTriangulosComponent', () => {
  let component: ClasificacionTriangulosComponent;
  let fixture: ComponentFixture<ClasificacionTriangulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionTriangulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionTriangulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

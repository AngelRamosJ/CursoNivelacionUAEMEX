import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazonesTrigonometricasComponent } from './razones-trigonometricas.component';

describe('RazonesTrigonometricasComponent', () => {
  let component: RazonesTrigonometricasComponent;
  let fixture: ComponentFixture<RazonesTrigonometricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazonesTrigonometricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazonesTrigonometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectasCortadasSecanteComponent } from './rectas-cortadas-secante.component';

describe('RectasCortadasSecanteComponent', () => {
  let component: RectasCortadasSecanteComponent;
  let fixture: ComponentFixture<RectasCortadasSecanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectasCortadasSecanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectasCortadasSecanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

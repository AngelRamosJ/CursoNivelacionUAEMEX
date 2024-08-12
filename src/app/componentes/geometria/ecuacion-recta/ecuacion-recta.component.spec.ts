import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionRectaComponent } from './ecuacion-recta.component';

describe('EcuacionRectaComponent', () => {
  let component: EcuacionRectaComponent;
  let fixture: ComponentFixture<EcuacionRectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuacionRectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionRectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

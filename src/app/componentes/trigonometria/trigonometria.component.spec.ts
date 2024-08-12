import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigonometriaComponent } from './trigonometria.component';

describe('TrigonometriaComponent', () => {
  let component: TrigonometriaComponent;
  let fixture: ComponentFixture<TrigonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrigonometriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

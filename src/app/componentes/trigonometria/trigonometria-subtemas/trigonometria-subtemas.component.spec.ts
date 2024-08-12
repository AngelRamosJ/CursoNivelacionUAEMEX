import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigonometriaSubtemasComponent } from './trigonometria-subtemas.component';

describe('TrigonometriaSubtemasComponent', () => {
  let component: TrigonometriaSubtemasComponent;
  let fixture: ComponentFixture<TrigonometriaSubtemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrigonometriaSubtemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrigonometriaSubtemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

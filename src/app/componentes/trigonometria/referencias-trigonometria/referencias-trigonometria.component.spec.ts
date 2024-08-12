import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasTrigonometriaComponent } from './referencias-trigonometria.component';

describe('ReferenciasTrigonometriaComponent', () => {
  let component: ReferenciasTrigonometriaComponent;
  let fixture: ComponentFixture<ReferenciasTrigonometriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenciasTrigonometriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasTrigonometriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

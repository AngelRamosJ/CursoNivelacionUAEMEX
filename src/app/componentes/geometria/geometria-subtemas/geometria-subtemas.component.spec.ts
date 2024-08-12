import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaSubtemasComponent } from './geometria-subtemas.component';

describe('GeometriaSubtemasComponent', () => {
  let component: GeometriaSubtemasComponent;
  let fixture: ComponentFixture<GeometriaSubtemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeometriaSubtemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriaSubtemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

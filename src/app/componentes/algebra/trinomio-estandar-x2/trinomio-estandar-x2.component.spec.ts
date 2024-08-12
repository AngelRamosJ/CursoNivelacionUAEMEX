import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomioEstandarX2Component } from './trinomio-estandar-x2.component';

describe('TrinomioEstandarX2Component', () => {
  let component: TrinomioEstandarX2Component;
  let fixture: ComponentFixture<TrinomioEstandarX2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinomioEstandarX2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomioEstandarX2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

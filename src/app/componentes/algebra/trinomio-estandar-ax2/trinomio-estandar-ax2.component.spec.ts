import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinomioEstandarAx2Component } from './trinomio-estandar-ax2.component';

describe('TrinomioEstandarAx2Component', () => {
  let component: TrinomioEstandarAx2Component;
  let fixture: ComponentFixture<TrinomioEstandarAx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinomioEstandarAx2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinomioEstandarAx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

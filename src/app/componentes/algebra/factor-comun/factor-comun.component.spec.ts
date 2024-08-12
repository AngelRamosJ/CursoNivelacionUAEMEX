import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorComunComponent } from './factor-comun.component';

describe('FactorComunComponent', () => {
  let component: FactorComunComponent;
  let fixture: ComponentFixture<FactorComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorComunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

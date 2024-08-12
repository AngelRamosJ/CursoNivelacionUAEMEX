import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraSubtemasComponent } from './algebra-subtemas.component';

describe('AlgebraSubtemasComponent', () => {
  let component: AlgebraSubtemasComponent;
  let fixture: ComponentFixture<AlgebraSubtemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgebraSubtemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraSubtemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

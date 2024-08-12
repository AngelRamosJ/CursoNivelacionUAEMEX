import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaCubosComponent } from './diferencia-cubos.component';

describe('DiferenciaCubosComponent', () => {
  let component: DiferenciaCubosComponent;
  let fixture: ComponentFixture<DiferenciaCubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiferenciaCubosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaCubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

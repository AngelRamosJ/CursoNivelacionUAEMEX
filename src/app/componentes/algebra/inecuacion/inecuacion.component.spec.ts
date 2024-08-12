import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InecuacionComponent } from './inecuacion.component';

describe('InecuacionComponent', () => {
  let component: InecuacionComponent;
  let fixture: ComponentFixture<InecuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InecuacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InecuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

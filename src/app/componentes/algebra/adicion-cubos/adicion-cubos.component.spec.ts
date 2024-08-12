import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionCubosComponent } from './adicion-cubos.component';

describe('AdicionCubosComponent', () => {
  let component: AdicionCubosComponent;
  let fixture: ComponentFixture<AdicionCubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionCubosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionCubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

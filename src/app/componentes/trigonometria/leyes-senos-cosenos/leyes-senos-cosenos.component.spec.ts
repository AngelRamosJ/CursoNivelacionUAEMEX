import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyesSenosCosenosComponent } from './leyes-senos-cosenos.component';

describe('LeyesSenosCosenosComponent', () => {
  let component: LeyesSenosCosenosComponent;
  let fixture: ComponentFixture<LeyesSenosCosenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeyesSenosCosenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeyesSenosCosenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

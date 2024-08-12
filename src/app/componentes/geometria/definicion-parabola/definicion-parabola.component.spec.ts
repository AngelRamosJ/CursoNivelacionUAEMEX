import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionParabolaComponent } from './definicion-parabola.component';

describe('DefinicionParabolaComponent', () => {
  let component: DefinicionParabolaComponent;
  let fixture: ComponentFixture<DefinicionParabolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionParabolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionParabolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

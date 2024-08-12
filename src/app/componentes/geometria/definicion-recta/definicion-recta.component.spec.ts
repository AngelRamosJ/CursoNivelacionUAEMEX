import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionRectaComponent } from './definicion-recta.component';

describe('DefinicionRectaComponent', () => {
  let component: DefinicionRectaComponent;
  let fixture: ComponentFixture<DefinicionRectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionRectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionRectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

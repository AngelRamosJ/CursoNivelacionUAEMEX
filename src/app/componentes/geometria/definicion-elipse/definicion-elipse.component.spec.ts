import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionElipseComponent } from './definicion-elipse.component';

describe('DefinicionElipseComponent', () => {
  let component: DefinicionElipseComponent;
  let fixture: ComponentFixture<DefinicionElipseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionElipseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionElipseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

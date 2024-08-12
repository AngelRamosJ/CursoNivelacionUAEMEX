import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionHiperbolaComponent } from './definicion-hiperbola.component';

describe('DefinicionHiperbolaComponent', () => {
  let component: DefinicionHiperbolaComponent;
  let fixture: ComponentFixture<DefinicionHiperbolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionHiperbolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionHiperbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

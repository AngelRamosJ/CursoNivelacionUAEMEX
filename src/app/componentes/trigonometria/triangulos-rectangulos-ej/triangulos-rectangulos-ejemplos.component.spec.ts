import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangulosRectangulosEjemplosComponent } from './triangulos-rectangulos-ejemplos.component';

describe('TriangulosRectangulosEjemplosComponent', () => {
  let component: TriangulosRectangulosEjemplosComponent;
  let fixture: ComponentFixture<TriangulosRectangulosEjemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangulosRectangulosEjemplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangulosRectangulosEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

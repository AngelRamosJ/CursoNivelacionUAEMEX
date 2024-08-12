import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionRectasComponent } from './interseccion-rectas.component';

describe('InterseccionRectasComponent', () => {
  let component: InterseccionRectasComponent;
  let fixture: ComponentFixture<InterseccionRectasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionRectasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionRectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

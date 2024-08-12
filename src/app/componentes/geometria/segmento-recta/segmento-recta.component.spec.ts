import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoRectaComponent } from './segmento-recta.component';

describe('SegmentoRectaComponent', () => {
  let component: SegmentoRectaComponent;
  let fixture: ComponentFixture<SegmentoRectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentoRectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoRectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

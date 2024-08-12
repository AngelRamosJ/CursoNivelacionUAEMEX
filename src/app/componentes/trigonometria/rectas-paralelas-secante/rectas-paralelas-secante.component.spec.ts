import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectasParalelasSecanteComponent } from './rectas-paralelas-secante.component';

describe('RectasParalelasSecanteComponent', () => {
  let component: RectasParalelasSecanteComponent;
  let fixture: ComponentFixture<RectasParalelasSecanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectasParalelasSecanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectasParalelasSecanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

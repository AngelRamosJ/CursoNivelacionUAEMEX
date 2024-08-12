import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboPerfectoBinomioComponent } from './cubo-perfecto-binomio.component';

describe('CuboPerfectoBinomioComponent', () => {
  let component: CuboPerfectoBinomioComponent;
  let fixture: ComponentFixture<CuboPerfectoBinomioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuboPerfectoBinomioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboPerfectoBinomioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

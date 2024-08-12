import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboBinomioComponent } from './cubo-binomio.component';

describe('CuboBinomioComponent', () => {
  let component: CuboBinomioComponent;
  let fixture: ComponentFixture<CuboBinomioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuboBinomioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboBinomioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaPritagorasComponent } from './teorema-pritagoras.component';

describe('TeoremaPritagorasComponent', () => {
  let component: TeoremaPritagorasComponent;
  let fixture: ComponentFixture<TeoremaPritagorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoremaPritagorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoremaPritagorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

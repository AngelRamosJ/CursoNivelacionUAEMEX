import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangulosOblicuangulosEjemplosComponent } from './triangulos-oblicuangulos-ejemplos.component';

describe('TriangulosOblicuangulosEjemplosComponent', () => {
  let component: TriangulosOblicuangulosEjemplosComponent;
  let fixture: ComponentFixture<TriangulosOblicuangulosEjemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangulosOblicuangulosEjemplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangulosOblicuangulosEjemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

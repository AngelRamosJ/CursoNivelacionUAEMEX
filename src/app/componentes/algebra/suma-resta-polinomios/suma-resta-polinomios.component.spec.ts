import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaRestaPolinomiosComponent } from './suma-resta-polinomios.component';

describe('SumaRestaPolinomiosComponent', () => {
  let component: SumaRestaPolinomiosComponent;
  let fixture: ComponentFixture<SumaRestaPolinomiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaRestaPolinomiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaRestaPolinomiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

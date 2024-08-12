import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaRestaOperacionesEnterosComponent } from './suma-resta-operaciones-enteros.component';

describe('SumaRestaOperacionesEnterosComponent', () => {
  let component: SumaRestaOperacionesEnterosComponent;
  let fixture: ComponentFixture<SumaRestaOperacionesEnterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaRestaOperacionesEnterosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaRestaOperacionesEnterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

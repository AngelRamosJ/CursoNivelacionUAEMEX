import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaRestaOperacionesFraccionariosComponent } from './suma-resta-operaciones-fraccionarios.component';

describe('SumaRestaOperacionesFraccionariosComponent', () => {
  let component: SumaRestaOperacionesFraccionariosComponent;
  let fixture: ComponentFixture<SumaRestaOperacionesFraccionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaRestaOperacionesFraccionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaRestaOperacionesFraccionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

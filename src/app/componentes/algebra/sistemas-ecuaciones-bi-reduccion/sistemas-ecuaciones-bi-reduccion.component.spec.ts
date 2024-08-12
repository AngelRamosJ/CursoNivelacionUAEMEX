import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesBiReduccionComponent } from './sistemas-ecuaciones-bi-reduccion.component';

describe('SistemasEcuacionesBiReduccionComponent', () => {
  let component: SistemasEcuacionesBiReduccionComponent;
  let fixture: ComponentFixture<SistemasEcuacionesBiReduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesBiReduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesBiReduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesTriReduccionComponent } from './sistemas-ecuaciones-tri-reduccion.component';

describe('SistemasEcuacionesTriReduccionComponent', () => {
  let component: SistemasEcuacionesTriReduccionComponent;
  let fixture: ComponentFixture<SistemasEcuacionesTriReduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesTriReduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesTriReduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

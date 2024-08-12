import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesLinealesComponent } from './ecuaciones-lineales.component';

describe('EcuacionesLinealesComponent', () => {
  let component: EcuacionesLinealesComponent;
  let fixture: ComponentFixture<EcuacionesLinealesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcuacionesLinealesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcuacionesLinealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

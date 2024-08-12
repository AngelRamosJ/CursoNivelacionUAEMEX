import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionAngulosComponent } from './clasificacion-angulos.component';

describe('ClasificacionAngulosComponent', () => {
  let component: ClasificacionAngulosComponent;
  let fixture: ComponentFixture<ClasificacionAngulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionAngulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionAngulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

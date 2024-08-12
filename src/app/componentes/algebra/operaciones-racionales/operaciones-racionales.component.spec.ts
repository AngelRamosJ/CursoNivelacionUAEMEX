import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesRacionalesComponent } from './operaciones-racionales.component';

describe('OperacionesRacionalesComponent', () => {
  let component: OperacionesRacionalesComponent;
  let fixture: ComponentFixture<OperacionesRacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesRacionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesRacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

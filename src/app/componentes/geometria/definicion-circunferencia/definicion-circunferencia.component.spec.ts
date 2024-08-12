import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionCircunferenciaComponent } from './definicion-circunferencia.component';

describe('DefinicionCircunferenciaComponent', () => {
  let component: DefinicionCircunferenciaComponent;
  let fixture: ComponentFixture<DefinicionCircunferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionCircunferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionCircunferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

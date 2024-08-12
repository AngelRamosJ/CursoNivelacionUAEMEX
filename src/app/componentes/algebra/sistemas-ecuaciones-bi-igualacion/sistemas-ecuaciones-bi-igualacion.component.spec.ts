import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasEcuacionesBiIgualacionComponent } from './sistemas-ecuaciones-bi-igualacion.component';

describe('SistemasEcuacionesBiIgualacionComponent', () => {
  let component: SistemasEcuacionesBiIgualacionComponent;
  let fixture: ComponentFixture<SistemasEcuacionesBiIgualacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasEcuacionesBiIgualacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasEcuacionesBiIgualacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

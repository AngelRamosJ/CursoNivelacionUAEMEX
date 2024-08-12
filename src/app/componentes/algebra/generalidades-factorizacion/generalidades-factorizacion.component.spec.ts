import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralidadesFactorizacionComponent } from './generalidades-factorizacion.component';

describe('GeneralidadesFactorizacionComponent', () => {
  let component: GeneralidadesFactorizacionComponent;
  let fixture: ComponentFixture<GeneralidadesFactorizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralidadesFactorizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralidadesFactorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

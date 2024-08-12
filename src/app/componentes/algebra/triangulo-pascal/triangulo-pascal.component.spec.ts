import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianguloPascalComponent } from './triangulo-pascal.component';

describe('TrianguloPascalComponent', () => {
  let component: TrianguloPascalComponent;
  let fixture: ComponentFixture<TrianguloPascalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrianguloPascalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianguloPascalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

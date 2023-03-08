import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosLayoutsComponent } from './productos-layouts.component';

describe('ProductosLayoutsComponent', () => {
  let component: ProductosLayoutsComponent;
  let fixture: ComponentFixture<ProductosLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

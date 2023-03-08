import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLayoutsComponent } from './principal-layouts.component';

describe('PrincipalLayoutsComponent', () => {
  let component: PrincipalLayoutsComponent;
  let fixture: ComponentFixture<PrincipalLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

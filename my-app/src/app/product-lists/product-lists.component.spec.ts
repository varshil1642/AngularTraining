import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListsComponent } from './product-lists.component';

describe('ProductListsComponent', () => {
  let component: ProductListsComponent;
  let fixture: ComponentFixture<ProductListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListsComponent]
    });
    fixture = TestBed.createComponent(ProductListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductsComponent } from './category-products.component';
import { RouterModule, RouterOutlet } from '@angular/router';

describe('CategoryProductsComponent', () => {
  let component: CategoryProductsComponent;
  let fixture: ComponentFixture<CategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProductsComponent, RouterModule, RouterOutlet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
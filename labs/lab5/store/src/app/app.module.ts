import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import {Categories} from "./categories";
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: CategoriesComponent },
      {path:'category/:categoryId/products', component: CategoryProductsComponent},
      {path: 'products/:productId', component: ProductComponent },
      {path: 'products', component: ProductComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CategoriesComponent,
    CategoryProductsComponent,
    ProductComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
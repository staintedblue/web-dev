import {Component, Input, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {Category} from '../categories';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
})

export class CategoryProductsComponent implements OnInit {
  products: Product[] | undefined; 
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const catIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = products.filter((p) => p.category.id == catIdFromRoute); 
  }

  share() {
    window.alert("This item will be shared ;)");
  }

}
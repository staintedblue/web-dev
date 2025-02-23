import { Component} from '@angular/core';
import {Categories, Category} from '../categories';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [RouterModule]
})

export class CategoriesComponent{
  categories: Category[] = Categories;
}
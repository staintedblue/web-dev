import { Component } from '@angular/core';
import {categories} from '../category.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
  imports: [RouterModule, RouterOutlet]
})
export class ViewCategoriesComponent {
  categories = categories;
}
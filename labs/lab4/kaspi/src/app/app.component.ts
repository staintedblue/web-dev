import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './product/product.component';
import { ProductInfo } from '../.././interfaces/product-info';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task2';

  products: ProductInfo[] = [
    {
      name: 'Клир Д.: Атомные привычки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-large',
      description: '',
      commentsNumber: 193,
      price: 2197,
      href: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000'
    },
    {
      name: 'Apple iPhone 13',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      description: '128Gb черный',
      commentsNumber: 3150,
      price: 276201,
      href: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large',
      description: '256Gb черный',
      commentsNumber: 384,
      price: 689_390 ,
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-large',
      description: '256Gb золотистый',
      commentsNumber: 515,
      price: 655_600,
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Apple iPhone 16',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
      description: '128Gb черный',
      commentsNumber: 283,
      price: 419_935,
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
      description: '3 ГБ/64 ГБ черный',
      commentsNumber: 660,
      price: 37_450,
      href: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-large',
      description: '256Gb черный',
      commentsNumber: 378,
      price: 642_805,
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-large',
      description: '256Gb серебристый',
      commentsNumber: 326,
      price: 664_893,
      href: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-large',
      description: '5G 8 ГБ/256 ГБ темно-синий',
      commentsNumber: 627,
      price: 188_900,
      href: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A25',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1c/84932692574238.jpg?format=gallery-large',
      description: '5G 6 ГБ/128 ГБ темно-синий',
      commentsNumber: 386,
      price: 109_900,
      href: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000'
    },

  ];

}
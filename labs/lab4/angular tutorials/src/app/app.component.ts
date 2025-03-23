import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  template : `Welcome to Angular !`,
})
export class AppComponent {
  title = 'angular tutorials';
}

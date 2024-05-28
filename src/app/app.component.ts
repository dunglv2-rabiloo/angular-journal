import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `<div>{{ currentTime }}</div>`,
})
export class MenuComponent {
  currentTime = new Date();
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: `<div>
    <app-menu />
    <h1>Hello, {{ name }}, born: {{ birthYear }}</h1>
  </div>`,
  styles: `
    :host {
      color: #4caf50
    }
  `,
})
export class AppComponent {
  name = 'Dung';
  birthYear = 2002;
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <ul>
      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/about-us">About us</a>
      </li>
    </ul>
    <router-outlet />
  `,
})
export class AppComponent {}

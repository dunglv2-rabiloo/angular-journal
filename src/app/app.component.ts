import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  template: ` @if (user) {
    <div>Welcome back, {{ user }}</div>
  }`,
})
export class UserComponent {
  user = 'dung';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `<app-user />`,
  styles: `
    :host {
      color: #4caf50;
    }
  `,
})
export class AppComponent {}

import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
    <div [className]="theme">
      <app-user [user]="user" (logoutEvent)="doLogout()" />
    </div>
  `,
  styles: `
    :host {
      color: #4caf50;
    }
  `,
})
export class AppComponent {
  theme: string = 'dark';
  user: User | null = {
    name: 'dung',
    programmingLanguages: ['Java', 'JavaScript', 'Golang'],
    tags: [
      {
        id: 1,
        label: 'Developer',
      },
      {
        id: 2,
        label: 'Backend',
      },
    ],
  };

  doLogout() {
    this.user = null;
  }
}

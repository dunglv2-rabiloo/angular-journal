import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User, UserComponent } from './user.component';
import { CommentsComponent } from './comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  template: `
    <div [className]="theme">
      @if (user) {
        <app-user [user]="user" (logoutEvent)="doLogout()" />
        @defer (on viewport) {
          <!-- comment will be loaded and display when we it is in viewport by scrolling or other actions -->
          <app-comments />
        } @placeholder {
          <p>Comments will appear here.</p>
        } @loading (minimum 1s) {
          <p>Loading comments...</p>
        }
      } @else {
        <h2>Please sign in</h2>
      }
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
    avatar:
      'https://static.vecteezy.com/system/resources/previews/008/422/689/non_2x/social-media-avatar-profile-icon-isolated-on-square-background-vector.jpg',
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

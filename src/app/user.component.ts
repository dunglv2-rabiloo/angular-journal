import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Tag {
  id: number;
  label: string;
}

export interface User {
  name: string;
  programmingLanguages: string[];
  tags: Tag[];
}

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    @if (user) {
      <h2>Welcome back, {{ user.name }}</h2>
      <button (click)="switchCase()">Switch Case</button>
      <button (click)="logout()">Logout</button>
      <div>Programming Languages:</div>
      <ul>
        @for (lang of user.programmingLanguages; track $index) {
          <li>{{ lang }}</li>
        }
      </ul>
      <div>Tags</div>
      <ul>
        @for (tag of user.tags; track tag.id) {
          <li [id]="tag.id">{{ tag.label }}</li>
        }
      </ul>
    } @else {
      <h2>Please sign in</h2>
    }
  `,
})
export class UserComponent {
  @Input() user: User | null = null;
  @Output() logoutEvent = new EventEmitter<void>();
  uppercase: boolean = false;

  logout() {
    this.logoutEvent.emit();
  }

  switchCase() {
    if (this.user) {
      if (this.uppercase) {
        this.user.name = this.user.name?.toLowerCase();
      } else {
        this.user.name = this.user.name?.toUpperCase();
      }
      this.uppercase = !this.uppercase;
    }
  }
}

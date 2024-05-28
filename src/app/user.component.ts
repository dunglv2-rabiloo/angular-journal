import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Tag {
  id: number;
  label: string;
}

export interface User {
  avatar: string;
  name: string;
  programmingLanguages: string[];
  tags: Tag[];
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    @if (user) {
      <img ngSrc="{{ user.avatar }}" width="128" height="128" priority />
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

import { Component, inject } from '@angular/core';
import { CommentService } from './comments.service';
import { DatePipe, LowerCasePipe } from '@angular/common';
import { DecoratorPipe } from './decorator.pipe';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [LowerCasePipe, DatePipe, DecoratorPipe],
  template: `
    <h3>Comments</h3>
    <div>Last update: {{ timestamp | date: 'medium' | decorator }}</div>
    <ul>
      @for (comment of comments; track $index) {
        <li>{{ comment | lowercase }}</li>
      }
    </ul>
  `,
})
export class CommentsComponent {
  comments: string[];
  timestamp: Date;

  constructor(private commentService: CommentService) {
    this.comments = this.commentService.getComments();
    this.timestamp = new Date();
  }
}

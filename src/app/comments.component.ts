import { Component, inject } from '@angular/core';
import { CommentService } from './comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  template: `
    <h3>Comments</h3>
    <ul>
      @for (comment of comments; track $index) {
        <li>{{ comment }}</li>
      }
    </ul>
  `,
})
export class CommentsComponent {
  commentService = inject(CommentService);
  comments: string[];

  constructor() {
    this.comments = this.commentService.getComments();
  }
}

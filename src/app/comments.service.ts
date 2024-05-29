import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments = ['Great try!', 'Awesome'];

  getComments(): string[] {
    return this.comments;
  }
}

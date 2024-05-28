import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="handleSubmit()">
      <div>
        <label>
          <span>Name</span>
          <input name="name" type="text" [(ngModel)]="name" />
        </label>
      </div>
      <div>
        <label>
          <span>Message</span>
          <textarea name="message" [(ngModel)]="message"></textarea>
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  `,
})
export class AboutUsComponent {
  name = '';
  message = '';

  handleSubmit() {
    console.log(this.name, this.message);
  }
}

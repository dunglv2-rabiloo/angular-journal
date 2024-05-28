import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="handleSubmit()">
      <div>
        <label>
          <span>Email</span>
          <input type="text" formControlName="email" />
        </label>
      </div>
      <div>
        <label>
          <span>Message</span>
          <textarea formControlName="message"></textarea>
        </label>
      </div>
      <button type="submit" [disabled]="!contactForm.valid">Send</button>
    </form>
  `,
})
export class AboutUsComponent {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  handleSubmit() {
    console.log(this.contactForm.value.email, this.contactForm.value.message);
  }
}

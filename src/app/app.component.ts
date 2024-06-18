import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Option,
  SearchableSelectComponent,
} from './searchable-select/searchable-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchableSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  initial: Option = {
    value: '5',
    label: 'Option 5',
  };

  selectOption(option: Option) {
    console.log('selected', option);
  }

  doFilter(keyword: string): Option[] {
    const OPTS = [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        value: '3',
        label: 'Option 3',
      },
    ];

    keyword = keyword.toLowerCase();
    const filtered = OPTS.filter((opt) =>
      opt.label.toLowerCase().includes(keyword)
    );
    return filtered;
  }
}

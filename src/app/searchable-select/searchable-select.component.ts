import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, debounceTime, map, scheduled, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface Option {
  value: string;
  label: string;
}

export type FilterMethod = (keyword: string) => Option[];

@Component({
  selector: 'app-searchable-select',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './searchable-select.component.html',
  styleUrl: './searchable-select.component.css',
})
export class SearchableSelectComponent implements OnInit {
  @Input({ required: true }) filterMethod!: FilterMethod;
  @Input() delay: number = 500;
  @Input() initialValue?: Option;
  @Output() select = new EventEmitter<Option>();

  options: Observable<Option[]> = new Observable();
  input = new FormControl<string | Option>('');

  ngOnInit() {
    if (this.initialValue) this.input.setValue(this.initialValue);

    this.options = this.input.valueChanges.pipe(
      debounceTime(this.delay),
      startWith(this.initialValue?.value),
      map((value) => {
        const keyword = typeof value === 'string' ? value : value?.value;
        return this.filterMethod(keyword || '');
      })
    );
  }

  displayLabelFn(option?: Option): string {
    return option?.label || '';
  }

  doSelect(event: MatAutocompleteSelectedEvent) {
    this.select.emit(event.option.value);
  }
}

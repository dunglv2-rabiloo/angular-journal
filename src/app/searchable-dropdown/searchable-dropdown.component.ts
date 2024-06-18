import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {
  Observable,
  debounceTime,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';

export interface Option {
  value: string;
  label: string;
}

export type FilterMethod = (keyword: string) => Observable<Option[]>;

@Component({
  selector: 'app-searchable-dropdown',
  standalone: true,
  imports: [
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgFor,
  ],
  templateUrl: './searchable-dropdown.component.html',
  styleUrl: './searchable-dropdown.component.css',
})
export class SearchableDropdownComponent implements OnInit {
  @Input() formControl: any;
  @Input({ required: true }) filterMethod!: FilterMethod;

  control = new FormControl();
  filterControl = new FormControl();
  searching = false;
  filteredOptions: Observable<Option[]> = new Observable();

  ngOnInit(): void {
    this.filteredOptions = this.filterControl.valueChanges.pipe(
      tap(() => (this.searching = true)),
      debounceTime(100),
      switchMap((keyword) => this.filterMethod(keyword)),
      tap(() => (this.searching = false))
    );

    console.log(this.formControl);
  }
}

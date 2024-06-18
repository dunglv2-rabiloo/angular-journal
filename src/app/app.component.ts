import { Component, OnInit, forwardRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Option,
  SearchableDropdownComponent,
} from './searchable-dropdown/searchable-dropdown.component';
import { CatFact, CatService } from './cat.service';
import { Observable, map } from 'rxjs';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchableDropdownComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SearchableDropdownComponent),
    },
  ],
})
export class AppComponent {
  formGroup: FormGroup = new FormGroup({
    approver: new FormControl(),
    test: new FormControl(),
  });

  constructor(private catService: CatService) {
    console.log(this.catService);
  }

  handleSubmit() {
    console.log(this.formGroup.value);
  }

  filterCatFact(keyword: string): Observable<Option[]> {
    return this.catService
      .fetchFacts()
      .pipe(
        map((facts) =>
          facts.map(
            (fact) => ({ label: fact.content, value: fact.content } as Option)
          )
        )
      );
  }
}

import { NoteFormComponent } from './../note-form/note-form.component';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteFormGroupKeys, NotesFormArray } from '../../@types/types';

@Component({
  selector: 'app-list-notes',
  standalone: true,
  imports: [
    CommonModule,
    NoteFormComponent,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './list-notes.component.html',
  styleUrl: './list-notes.component.scss',
})
export class ListNotesComponent {
  form!: FormGroup<{
    subjects: NotesFormArray;
  }>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      subjects: this.formBuilder.array([
        this.formBuilder.group(FORM_GROUP_DEFAULT),
      ]),
    });
  }

  submit() {}

  addSubjectNoteAfter(index: number) {
    this.subjects.insert(index + 1, this.formBuilder.group(FORM_GROUP_DEFAULT));
  }

  deleteSubjectNote(index: number) {
    this.subjects.removeAt(index);
  }

  get subjects(): NotesFormArray {
    return this.form.controls['subjects'];
  }
}

const NUMBER_PATTERN = '[1-9]\\d*(?:\\.\\d+)?';

const NUMBER_VALIDATOR = [
  Validators.required,
  Validators.pattern(NUMBER_PATTERN),
  Validators.min(0),
  Validators.max(20),
];

const FORM_GROUP_DEFAULT: {
  [key in NoteFormGroupKeys]: [any, ValidationErrors[]?];
} = {
  name: [''],
  devoir: ['', NUMBER_VALIDATOR],
  exam: ['', NUMBER_VALIDATOR],
  coff: ['1', [Validators.required]],
  result: ['0'],
};

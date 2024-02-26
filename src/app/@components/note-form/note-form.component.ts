import { MatButtonModule } from '@angular/material/button';
import {
  Component,
  EventEmitter,
  Input,
  InputSignal,
  Output,
  input,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteFormGroup, NoteFormGroupKeys } from '../../@types/types';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss',
})
export class NoteFormComponent {
  @Input({ required: true }) form!: NoteFormGroup;
  @Output('delete') del = new EventEmitter<never>();

  constructor() {}

  deleteSelf(): void {
    this.del.emit();
  }

  hasError(control: NoteFormGroupKeys, type: string): boolean {
    return this.form.controls[control].hasError(type);
  }

  hasErrors(control: NoteFormGroupKeys): boolean {
    return this.form.controls[control].invalid;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListNotesComponent } from './@components/list-notes/list-notes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup } from '@angular/forms';
import { NoteFormGroupKeys } from './@types/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListNotesComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('listNotes', { static: true, read: ListNotesComponent })
  listNotes!: ListNotesComponent;

  total = '';

  constructor(private detector: ChangeDetectorRef) {}

  calculate(): void {
    if (this.listNotes.form.valid) {
      let coffs = 0;
      let total = 0;

      this.subjects.forEach((subject, index) => {
        let subjectFormGroup = this.listNotes.subjects.at(index);
        let result =
          subject.devoir === subject.exam
            ? subject.devoir * subject.coff
            : (subject.devoir * 0.4 + subject.exam * 0.6) * subject.coff;
        total += result;
        coffs += Number(subject.coff);
        subjectFormGroup.controls['result'].setValue(
          (result / subject.coff).toFixed(2)
        );
      });

      this.total = (total / coffs).toFixed(2);
      this.detector.markForCheck();
    }
  }

  get subjects(): { [K in NoteFormGroupKeys]: any }[] {
    return this.listNotes.form.getRawValue().subjects;
  }
}

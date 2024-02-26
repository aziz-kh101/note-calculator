import { FormArray, FormControl, FormGroup } from '@angular/forms';

type NoteFormGroupContent = {
  name: FormControl<any>;
  devoir: FormControl<any>;
  exam: FormControl<any>;
  coff: FormControl<any>;
  result: FormControl<any>;
};

export type NoteFormGroup = FormGroup<NoteFormGroupContent>;

export type NotesFormArray = FormArray<NoteFormGroup>;

export type NoteFormGroupKeys = keyof NoteFormGroupContent;

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotesComponent } from './list-notes.component';

describe('ListNotesComponent', () => {
  let component: ListNotesComponent;
  let fixture: ComponentFixture<ListNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

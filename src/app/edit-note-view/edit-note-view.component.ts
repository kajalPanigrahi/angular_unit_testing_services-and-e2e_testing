import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {

  note : Note = new Note();

  constructor(@Inject(MAT_DIALOG_DATA)private data, private noteService : NoteService, private dialog:MatDialogRef<EditNoteViewComponent>) { }

  ngOnInit() {
    this.note = this.noteService.getNoteById(this.data.noteId);
  }

  saveNote(){
    this.noteService.editNote(this.note).subscribe(data=>{
      console.log('edit success')
      this.dialog.close();
    });
  }

}

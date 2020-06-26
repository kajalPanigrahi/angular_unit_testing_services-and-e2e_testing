import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes : Array<Note> = [];

  constructor(private noteService : NoteService) { }

  ngOnInit() {
    //reading notes from server
    this.noteService.getNotes().subscribe(
      data=>{
        this.notes = data;
      }
    )
  }

  

}

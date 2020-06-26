import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  notes:Array<Note> = [];

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

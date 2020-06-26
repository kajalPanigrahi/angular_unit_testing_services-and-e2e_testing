import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {

  note : Note = new Note();
  notes : Array<Note> = [];

  constructor(private noteService : NoteService) { }

  ngOnInit() {
  }

  
  takeNote(){
    console.log('Taking Note');
    // console.log(this.note);
  

    this.notes.push(this.note);    
    // console.log(this.notes);

    //push note to server
    this.noteService.addNote(this.note).subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        let noteIndex = this.notes.findIndex(note=>note.title===this.note.title)

        this.notes.splice(noteIndex,1);

        console.log(error.message);
        // this.submitResponse = error.message
      }

    )

    this.note = new Note();
  }
}

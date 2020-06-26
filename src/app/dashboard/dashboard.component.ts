import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // note : Note = new Note();
  // notes : Array<Note> = [];

  // submitResponse : string = '';

  constructor(private noteService : NoteService) { }

  ngOnInit() {
    // //reading notes from server
    // this.noteService.getNotes().subscribe(
    //   data=>{
    //     this.notes = data;
    //   }
    // )
  }

  // takeNote(){
  //   console.log('Taking Note');
  //   // console.log(this.note);
  

  //   this.notes.push(this.note);    
  //   // console.log(this.notes);

  //   //push note to server
  //   this.noteService.addNote(this.note).subscribe(
  //     data=>{
  //       console.log(data);
        
  //     },
  //     error=>{
  //       let noteIndex = this.notes.findIndex(note=>note.title===this.note.title)

  //       this.notes.splice(noteIndex,1);

  //       console.log(error.message);
  //       this.submitResponse = error.message
  //     }

  //   )

  //   this.note = new Note();
  // }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteService } from './note.service';
import { Note } from './note';


//Model Class for Note Data

// class Note{
//   title:string;
//   text:string;

//   constructor(){
//     this.title='';
//     this.text='';
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
 
export class AppComponent {

  //for note
  note : Note = new Note();
  //for local storage of notes
  notes : Array<Note> = [];
  
  //for submit message
  submitResponse : string = '';
  constructor(){
    
  }

  ngOnInit(){
    //reading notes from server
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

  // titleChange(event){
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target.value);
  // }

}

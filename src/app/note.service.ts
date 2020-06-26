import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { AuthenticationService } from './services/authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NoteService {

  notes : Array<Note>;
  noteSubject : BehaviorSubject<Array<Note>>;

  constructor(private httpClient : HttpClient, private authService : AuthenticationService) { 
    this.notes = [];
    this.noteSubject = new BehaviorSubject(this.notes);
    this.fetchAllNotesFromServer();
  }

  fetchAllNotesFromServer(){
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${this.authService.getAuthToken()}`
      )
    }).subscribe(
      data=>{
        this.notes = data;
        this.noteSubject.next(this.notes);
      }
    )
  }

  getNotes(){
    // return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
    //   headers : new HttpHeaders().set(
    //     'Authorization',`Bearer ${this.authService.getAuthToken()}`
    //   )
    // })
    return this.noteSubject;
  }

  addNote(note:Note):Observable<Note>{
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${this.authService.getAuthToken()}`
      )
    })
    .pipe(tap(data=>{
      this.notes.push(data);
      this.noteSubject.next(this.notes);
    }))
  }

  getNoteById(noteId){
    let note = this.notes.find(note=>note.id === noteId);
    return Object.assign({},note);
  }

  editNote(note){
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,{
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${this.authService.getAuthToken()}`
      )
    })
    .pipe(tap(data=>{
      let note = this.notes.find(noteItem=>noteItem.id === data.id)
      Object.assign(note,data);
      this.noteSubject.next(this.notes);
    }))
  }
  
}

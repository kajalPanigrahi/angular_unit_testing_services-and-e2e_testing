import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';

import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './services/authentication.service';

describe('NoteService', () => {

  let service : NoteService;
  let httpMock : HttpTestingController;

  beforeEach(() => 
  {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    declarations:[],
    providers:[NoteService, AuthenticationService]
    })

    service = TestBed.get(NoteService);

    httpMock = TestBed.get(HttpTestingController);

    let request = httpMock.expectOne({
      url:'http://localhost:3000/api/v1/notes',
      method:'GET'
    })


  })
  
 

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService);
    expect(service).toBeTruthy();
  });


  it('should call fetchAllNotesFromServer() for fetching Notes which makes the right API Call and updates the note-subject',()=>{

    let note ={id:101,title:'Note 1',text:'Note 1 Text'}

    service.fetchAllNotesFromServer();

    let request = httpMock.expectOne({
      url:'http://localhost:3000/api/v1/notes',
      method:'GET'
    })

    request.flush([note]);

    service.getNotes().subscribe(
      data=>{
        expect(data).toEqual([note]);
      }
    )
  })

  it('should call addNote() with right API Call with right http-method, right parameters and note-subject updated',()=>{
    let note = {id:102,title:'Note 2',text:'Note 2 Text'};


    //addnote with right parameter and response
    service.addNote(note).subscribe(data=>{
      expect(data).toEqual(note);
    })

    //right api call
    let req = httpMock.expectOne({
      url:'http://localhost:3000/api/v1/notes',
      method:'POST'
    })

    req.flush(note);


    //note-subject getting updated
    service.getNotes().subscribe(notes=>{
      expect(notes).toEqual([note]);
    })

  })

});

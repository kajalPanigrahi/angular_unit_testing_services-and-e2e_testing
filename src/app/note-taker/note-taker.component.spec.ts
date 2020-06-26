import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakerComponent } from './note-taker.component';

//for mat expansion panel
import {MatExpansionModule} from '@angular/material/expansion';

//for ngModel
import { FormsModule } from '@angular/forms';

//for mat form field
import { MatFormFieldModule } from '@angular/material/form-field'

//for noteservice
import { NoteService } from '../note.service';
import { NoteStub } from '../note-stub';

//for material component animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//for matInput
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { Note } from '../note';

describe('NoteTakerComponent', () => {
  let component: NoteTakerComponent;
  let fixture: ComponentFixture<NoteTakerComponent>;

  let service : NoteService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTakerComponent ],
      imports:[MatExpansionModule,FormsModule, MatFormFieldModule, BrowserAnimationsModule,MatInputModule],
      providers:[{
        provide:NoteService,
        useClass:NoteStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakerComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(NoteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input element for note title and value should be blank ',()=>{
    let inputelement = fixture.debugElement.query(By.css('input'))

    expect(inputelement).toBeTruthy();

    expect(inputelement.nativeElement.value).toBe('');
  })

  it('should contain textarea element for note text and value should be blank ',()=>{
    let inputelement = fixture.debugElement.query(By.css('textarea'))

    expect(inputelement).toBeTruthy();

    expect(inputelement.nativeElement.value).toBe('');
  })

  it('should contain button to submit note with text `Done` ',()=>{
    let inputelement = fixture.debugElement.query(By.css('button'))

    expect(inputelement).toBeTruthy();

    expect(inputelement.nativeElement.value).toBe('Done');
  })

  it('should call addNote() method with right parameters on click of button and success is handled ',()=>{

    spyOn(service,'addNote').and.callThrough();

    let note : Note = new Note();
    note.title = 'Dummy Note';
    note.text = 'Dummy Note Text';

    component.note = note;

    let button = fixture.debugElement.query(By.css('button'))

    expect(button).toBeTruthy();

    button.nativeElement.click();
    fixture.detectChanges();

    expect(service.addNote).toHaveBeenCalledWith(note);

    expect(component.note.title).toBe('');
    expect(component.note.text).toBe('');

  })

  it('should call addNote() method with right parameters on click of button and error is handled ',()=>{

    spyOn(service,'addNote').and.callThrough()

    let note : Note = new Note();
    note.title = '';
    note.text = 'Dummy Note Text';

    component.note = note;

    let button = fixture.debugElement.query(By.css('button'))

    expect(button).toBeTruthy();

    button.nativeElement.click();
    fixture.detectChanges();

    expect(service.addNote).toHaveBeenCalledWith(note);

    expect(component.note.title).toBe(note.title);
    expect(component.note.text).toBe(note.text);

  })

});

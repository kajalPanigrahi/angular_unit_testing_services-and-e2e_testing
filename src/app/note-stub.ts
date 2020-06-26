import { Note } from './note';
import { Observable } from 'rxjs';

export class NoteStub{
    addNote(note:Note){
        if(note.title==='' || note.text===''){
            return Observable.throw({message:'Title and Text Cannot be left blank'})
        }
        return Observable.create();
    }
}
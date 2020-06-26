import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note : Note;

  constructor(private routerService : RouteService) { }

  ngOnInit() {
  }
  editNote(){
    // alert('Editing Note')
    // this.note.id
    this.routerService.toEditView(this.note.id);
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router : Router, private location:Location) { }

  toLogin(){
    this.router.navigate(['login'])
  }

  toDashboard(){
    this.router.navigate(['dashboard'])
  }

  back(){
    this.location.back();
  }

  toEditView(noteId){
    this.router.navigate([
      'dashboard',
      {
        outlets:{
          editNoteOutlet:['note',noteId,'edit']
        }
      }
    ])
  }
}

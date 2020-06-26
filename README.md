# KeepApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



// for GUARD


1. on success of token validation ---> 
{

	'isAuthenticated':true;
}

2. transform response to extract value of 'isAuthenticated'

3. before returning obs / pro / bool : check the extracted value, if false -> route to Login

4. return the obs / pro / bool



.map(s=>s.toUpperCase())



if x is promise
x.then() ---> promise



if x is observable

x.subscribe() ---> Subscription

return x;

return x.subscribe() ---> fail 





/*********************/
Adding Edit Functionality

Dashboard.component.html ::

* added named router outlet



AppModule.ts

* configured child route under dashboard for EditNoteOpenerComponent referring to named router outlet


RouterService.ts


* added navigation method for editview referring to named router outlet


Note.component.ts


* on click -> call method editNote() to call the routerService navigation method



### EDIT FUNCTIONALITY

1. Note should be clicked ---> (click) = editNote() [NoteComponent.ts] --> to trigger editnoteopener with dialog for note to be edited

2. Dialog to be opened : should display note fields for the note which is clicked

* Dialog : material dialog component ---> Loading EditComponent ---> template will display note fields 
* EditNoteOpener Component to load dialog 
* EditNoteOpener to load over the NoteView (ListView) Component
* To load 2 Components : create auxillary route for the secondary component (EditNoteOpener)
* For Auxillary Route --> component gets loaded through named-router outlet
* In app.module.ts --> route configuration for auxillary routes holds ref to name of the named router outlet
* In router-service --> navigation holds ref to name of the named router outlet
* named-router-outlet to be added to dashboard




3. Reading Data for Note Clicked

* passing id of the note clicked to router-service's toEditView() method
* re-configuring route in app.module.ts for edit-view to accomodate the route parameter
* passing noteId in route from toEditView() method of router-service
* EditNoteOpener Component on load reads Id from route using ActivatedRoute and passes it through dialog to EditNoteView Component
* EditNoteView Component reads the Id injected to dialog
* OnInit - EditNoteView component fetches note by Id through note-service
* note-service to have getNoteById() to find note from notesarray by its id and return the object


4. Editing Note

* define editNote() in noteservice with PUT call to httpClient
* call editNote() of noteservice when Button clicked on EditNoteViewComponent
* upon edit, use the dialog-reference  to close the dialog
* in editnoteviewopener component, call afterClosed() and get the routerservice to navigate to previous location


import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  constructor() {
  }

  italianCV(){
    window.open("assets/cvs/CV Corvi IT.pdf")
  }

  englishCV(){
    window.open("assets/cvs/CV Corvi English.pdf")
  }

  spanishCV(){
    window.open("assets/cvs/CV Corvi.pdf")

  }
}

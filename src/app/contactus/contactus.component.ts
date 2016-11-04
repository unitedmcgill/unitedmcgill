import { Component, OnInit } from '@angular/core';
import { ContactUs } from '../models/contact-us';

@Component({
  //selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contact : ContactUs;
  public active : boolean;

  constructor() {
    this.contact = new ContactUs();
    this.active = true;
   }

  ngOnInit() {
  }

  public onSend(){
    alert("Send!");

    // Clear the form since we are doing *ngIf="active" on the form tag
    this.contact = new ContactUs();
    
    // Trick to reset the pristine state of the form
    // This is a temporary workaraound until a form reset procedure is available
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}

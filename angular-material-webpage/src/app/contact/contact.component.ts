import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    personName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log('Message sent');
    console.log(this.contactForm.value);
    this.openSnackBar();
    formDirective.resetForm();
    this.contactForm.reset();
  }

  openSnackBar() {
    this.snackBar.open('Message has been sent.', '', {duration: 2000});
  }
}

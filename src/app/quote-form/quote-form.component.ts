import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", 0, 0, new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  form: NgForm;

  submitQuote() {
    let myForm: any = this.addQuote.emit(this.newQuote);
    return myForm;
    if (this.form.valid) {
      alert("Form submitted");
      this.form.resetForm();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

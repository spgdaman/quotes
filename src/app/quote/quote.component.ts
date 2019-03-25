import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "The Way Get Started Is To Quit Talking And Begin Doing.", "Walt Disney", "Simon Gatheru",0,0, new Date(2019,0,15)),
    new Quote(2, "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.", "Winston Churchill", "Simon Gatheru",0,0, new Date(2019,1,7)),
    new Quote(3, "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Rob Siltanen", "Simon Gatheru",0,0, new Date(2019,2,22)),
    new Quote(4, "Whether You Think You Can Or Think You Can’t, You’re Right.", "Henry Ford", "Simon Gatheru",0,0, new Date(2019,1,18))
  ];

  firstNum: number = 0;
  lastNum: number = 0;
  iteration: number;

  highestUp() {
    for (this.iteration = 0; this.iteration < this.quotes.length; this.iteration++) {
      this.lastNum = this.quotes[this.iteration].upvote;
      if (this.lastNum > this.firstNum) {
        this.firstNum = this.lastNum;
      }
      return this.firstNum;
    }
  }



  // highestQuote(index) {
  //   let quoteOne: number;
  //   quoteOne = this.quotes[index].upvote;
  //   let quoteTwo: any;
  //   quoteTwo = [];
  //
  //   for (var up of this.quotes) {
  //     var tempQuote = this.quotes.upvote;
  //     quoteTwo.push(tempQuote);
  //     for (var check of quoteTwo) {
  //       if(check == quoteOne) {
  //         this.quotes.highestUpvote = true;
  //       }
  //     }
  //   }
  //
  // }

  toaQuote(isDone, index) {
    if (isDone) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.quoteDate = new Date(quote.quoteDate);
    this.quotes.push(quote);
  }

  toggleQuote(index) {
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}

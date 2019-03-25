import { Directive, ElementRef, HostListener } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appUpvoteHighlight]'
})
export class UpvoteHighlightDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'lightblue';
  }



  // // @HostListener('click') onClicks() {
  // //   if (this.highestUpvote) {
  // //     this.highlight('lightblue');
  // //   }
  // // }
  //
  // private highlight(color: string) {
  //   this.elem.nativeElement.style.backgroundColor = 'lightblue';
  // }

}

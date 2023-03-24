import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    let val = this._el.nativeElement.value; 
    this._el.nativeElement.value = val.replace(/[^0-9]*/g, '');
    if ( val !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}

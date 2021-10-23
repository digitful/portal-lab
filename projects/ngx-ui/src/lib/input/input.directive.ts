import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[digitInput]'
})
export class InputDirective implements AfterViewInit {

  @Input() text!: string;
  @Output() readonly valueChanged = new EventEmitter<string>();

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

  /*
  @Input()
  set text(value: string) {
    console.log(`This is the text to log: ${value}`);
  }
  */

  changeValue(): void {
    this.valueChanged.emit('value')
  }

}

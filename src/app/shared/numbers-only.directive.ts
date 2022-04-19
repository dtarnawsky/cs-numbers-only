import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event) {
    this.allowNumbers(event.target);
  }

  @HostListener('blur', ['$event'])
  onBlur(event) {
    this.allowNumbers(event.target);
  }

  @HostListener('focus', ['$event'])
  onFocus(event) {
    this.allowNumbers(event.target);
  }

  @HostListener('ionInput', ['$event'])
  onIonInput(event) {
    this.allowNumbers(event.target);
  }

  @HostListener('ionBlur', ['$event'])
  onIonBlur(event) {
    this.allowNumbers(event.target);
  }

  @HostListener('ionFocus', ['$event'])
  onIonFocus(event) {
    this.allowNumbers(event.target);
  }

  private allowNumbers(element: HTMLInputElement) {
    element.value = '$' + element.value.replace(/\D/g, '');
    this.ngModelChange.emit(element.value);
  }
}

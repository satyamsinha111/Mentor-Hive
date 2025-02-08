import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormatter]',
  standalone: true,
})
export class PhoneNumberFormatterDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (value.length > 10) {
      value = value.substring(0, 10); // Restrict to 10 digits
    }

    // Format as (123) 456-7890
    let formattedValue = '';
    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 3);
    }
    if (value.length > 3) {
      formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length > 6) {
      formattedValue += '-' + value.substring(6, 10);
    }

    input.value = formattedValue;
  }
}

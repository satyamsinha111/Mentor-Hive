import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]',
  standalone: true,
})
export class NumericOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    input.value = value;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow: Backspace, Delete, Tab, Escape, Enter
    if (
      ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(event.key) ||
      (event.key === 'a' && (event.ctrlKey || event.metaKey)) || // Allow: Ctrl+A (Select All)
      (event.key === 'c' && (event.ctrlKey || event.metaKey)) || // Allow: Ctrl+C (Copy)
      (event.key === 'v' && (event.ctrlKey || event.metaKey)) || // Allow: Ctrl+V (Paste)
      (event.key === 'x' && (event.ctrlKey || event.metaKey)) || // Allow: Ctrl+X (Cut)
      (event.key >= '0' && event.key <= '9') || // Allow: Numbers
      (event.key >= 'Numpad0' && event.key <= 'Numpad9') // Allow: Numpad Numbers
    ) {
      return;
    }

    event.preventDefault();
  }
}

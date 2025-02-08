import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Directive({
  selector: '[appTagInput]',
  standalone: true,
})
export class TagInputDirective {
  @Input() separator: string = ','; // Default separator
  @Input() formArray!: FormArray; // Get FormArray from component

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === this.separator) {
      event.preventDefault();

      const inputElement = this.el.nativeElement;
      const value = inputElement.value.trim();

      if (value) {
        // Ensure no duplicates (optional)
        if (!this.formArray.value.includes(value)) {
          this.formArray.push(new FormControl(value)); // 🔥 Push new value
        }

        console.log('Updated Values:', this.formArray.value);
      }

      inputElement.value = ''; // Clear input field
    }
  }
}

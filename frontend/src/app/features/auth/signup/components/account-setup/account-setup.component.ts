import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-account-setup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './account-setup.component.html'
})
export class AccountSetupComponent {
  @Input() accountForm!: FormGroup;

  @Output() submitClick: EventEmitter<void> = new EventEmitter<void>();

  onSubmit() {
    if (this.accountForm.valid) {
      this.submitClick.emit();
    }
  }
}

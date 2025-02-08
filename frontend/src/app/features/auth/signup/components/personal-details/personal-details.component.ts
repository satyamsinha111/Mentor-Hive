import { Component, Input } from '@angular/core';
import { PhoneNumberFormatterDirective } from '../../../../../shared/directives/phone-number-formatter.directive';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-personal-details',
  imports: [
    PhoneNumberFormatterDirective,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
})
export class PersonalDetailsComponent {
  @Input() personalForm!: FormGroup;
}

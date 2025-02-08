import { Component, Input } from '@angular/core';
import { PhoneNumberFormatterDirective } from '../../../../../shared/directives/phone-number-formatter.directive';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  imports: [PhoneNumberFormatterDirective,MatFormField,MatLabel,MatInputModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  @Input() personalForm?: FormGroup;

}

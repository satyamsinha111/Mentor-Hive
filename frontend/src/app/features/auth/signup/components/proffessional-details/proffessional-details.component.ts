import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { NumericOnlyDirective } from '../../../../../shared/directives/number-only.directive';
import { TagInputDirective } from '../../../../../shared/directives/tag-input.directive';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../../../../shared/enums/common.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-professional-details',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    NumericOnlyDirective,
    TagInputDirective,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  templateUrl: './proffessional-details.component.html',
  styleUrl: './proffessional-details.component.scss',
})
export class ProffessionalDetailsComponent {
  @Input() professionalForm!: FormGroup;
  @Input() role?: Role;

  protected readonly Mentor: string = Role.Mentor;
  protected readonly Mentee: string = Role.Mentee;

  constructor(private fb: FormBuilder) {
    console.log('ProfessionalDetailsComponent', this.professionalForm);
  }

  removeTag(controlName: string, tag: string) {
    const control = this.professionalForm?.get(controlName);
    if (control) {
      control.setValue(control.value.filter((t: string) => t !== tag));
    }
  }
  get expertiseArray() {
    return this.professionalForm?.get('expertise') as FormArray;
  }

  get companies(): FormArray {
    return this.professionalForm?.get('companies') as FormArray;
  }

  addCompany() {
    const companyForm = this.fb.group({
      companyName: ['', Validators.required],
      position: ['', Validators.required],
      duration: ['', Validators.required],
    });
    this.companies.push(companyForm);
  }

  removeCompany(index: number) {
    this.companies.removeAt(index);
  }
}

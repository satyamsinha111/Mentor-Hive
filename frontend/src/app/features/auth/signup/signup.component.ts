import { NumericOnlyDirective } from './../../../shared/directives/number-only.directive';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { PublicRoutes } from '../../../shared/enums/routes.enum';
import { SelectRoleComponent } from './components/select-role/select-role.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProffessionalDetailsComponent } from './components/proffessional-details/proffessional-details.component';
import { Role } from '../../../shared/enums/common.enum';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    CdkStepperModule,
    ProffessionalDetailsComponent,
    SelectRoleComponent,
    PersonalDetailsComponent,
    AccountSetupComponent,
  ],
  providers: [{ provide: CdkStepper, useClass: CdkStepper }],

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  protected roleForm: FormGroup;
  protected personalForm: FormGroup;
  protected professionalForm: FormGroup;
  protected accountForm: FormGroup;
  protected selectedRole?: Role;
  protected PublicRoutes = PublicRoutes;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.roleForm = this.fb.group({
      role: ['', Validators.required],
    });

    this.personalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: [
        '',
        [Validators.required, Validators.pattern(/^(\(\d{3}\) \d{3}-\d{4})$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
    });

    this.professionalForm = this.fb.group({
      experience: ['', Validators.required],
      expertise: this.fb.array([]), // Only for mentors
      learningInterests: this.fb.array([]), // Only for mentees
      companies: this.fb.array([]),
    });

    this.accountForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agreeTerms: [false, Validators.requiredTrue],
    });
  }

  getSelectedRole(role: Role) {
    this.selectedRole = role;
    this.roleForm.setValue({ role });
  }

  get expertiseArray() {
    return this.professionalForm.get('expertise') as FormArray;
  }

  get companies(): FormArray {
    return this.professionalForm.get('companies') as FormArray;
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

  onSubmit() {
    if (
      this.roleForm.valid &&
      this.personalForm.valid &&
      this.professionalForm.valid &&
      this.accountForm.valid
    ) {
      console.log('Signup Data:', {
        role: this.roleForm.value.role,
        ...this.personalForm.value,
        ...this.professionalForm.value,
        ...this.accountForm.value,
      });

      this.router.navigate(['/login']);
    }
  }
}

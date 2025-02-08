import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { Role } from '../../../../../shared/enums/common.enum';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { take } from 'rxjs';

@Component({
  selector: 'app-select-role',
  standalone: true,
  imports: [
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    CdkStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.scss',
})
export class SelectRoleComponent {
  @Input() roleForm!: FormGroup;
  @Output() selectedRole: EventEmitter<Role> = new EventEmitter<Role>();

  ngOnInit() {
    console.log('roleForm', this.roleForm);
    if(this.roleForm){
      this.roleForm.get('role')?.valueChanges.pipe(take(1)).subscribe((newRole: Role) => {
        this.selectedRole.emit(newRole);
      });

    }
  }

  protected readonly Mentor: string = Role.Mentor;
  protected readonly Mentee: string = Role.Mentee;
}

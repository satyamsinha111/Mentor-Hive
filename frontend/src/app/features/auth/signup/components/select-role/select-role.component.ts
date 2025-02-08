import { Component, EventEmitter, Output } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { Role } from '../../../../../shared/enums/common.enum';


@Component({
  selector: 'app-select-role',
  imports: [MatLabel, MatRadioModule],
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.scss'
})
export class SelectRoleComponent {
  @Output() selectedRole: EventEmitter<string> = new EventEmitter<string>();
  protected readonly Mentor:string = Role.Mentor;
  protected readonly Mentee:string = Role.Mentee;

  onRoleChange(event: any) {
    this.selectedRole.emit(event.value);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-select-role',
  imports: [MatLabel, MatRadioModule],
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.scss'
})
export class SelectRoleComponent {
  @Output() selectedRole: EventEmitter<string> = new EventEmitter<string>();

  onRoleChange(event: any) {
    console.log(event.value,event);
    this.selectedRole.emit(event.value);
  }
}

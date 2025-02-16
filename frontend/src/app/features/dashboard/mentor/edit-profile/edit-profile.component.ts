import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ]
})
export class EditProfileComponent {
  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.editProfileForm = this.fb.group({
      avatar: ['https://randomuser.me/api/portraits/men/10.jpg'],
      name: ['John Doe', Validators.required],
      role: ['Senior Software Engineer & Mentor', Validators.required],
      about: ['Passionate about helping developers grow.', Validators.required],
      skills: ['Angular, React, Node.js, GraphQL'],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      phone: ['+1 (123) 456-7890', Validators.required],
      location: ['San Francisco, CA', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editProfileForm.patchValue({ avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      console.log('Profile Updated:', this.editProfileForm.value);
      alert('Profile updated successfully!');
    }
  }

  cancelEdit() {
    this.router.navigate(['/mentor/dashboard/profile']);
  }
}

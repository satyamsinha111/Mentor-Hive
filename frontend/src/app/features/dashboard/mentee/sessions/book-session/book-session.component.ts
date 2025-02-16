import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-session',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.scss']
})
export class BookSessionComponent {
  sessionForm: FormGroup;
  availableTimes: string[] = ['10:00 AM', '11:30 AM', '2:00 PM', '4:00 PM', '6:00 PM'];
  mentor = {
    name: 'John Doe',
    title: 'Senior Software Engineer & Mentor'
  };
  mentorImage = 'https://randomuser.me/api/portraits/men/1.jpg';

  constructor(private fb: FormBuilder) {
    this.sessionForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  bookSession() {
    if (this.sessionForm.valid) {
      console.log('Session Booked:', this.sessionForm.value);
    }
  }
}

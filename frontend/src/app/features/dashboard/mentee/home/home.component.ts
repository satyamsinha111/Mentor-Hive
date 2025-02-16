import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private _router: Router) {}
  sessions = [
    {
      mentor: 'John Doe',
      date: new Date(),
      time: '10:00 AM'
    }
  ];

  recommendedMentors = [
    {
      name: 'Jane Smith',
      expertise: 'Frontend Development'
    }
  ];

  viewMentorProfile(mentor: any) {
    this._router.navigate(['/mentee/dashboard/mentor-profile-view-only']);
  }
}

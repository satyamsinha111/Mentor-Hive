import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-mentee',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: './mentee.component.html',
  styleUrl: './mentee.component.scss'
})
export class MenteeComponent {

  mentors = [
    { name: 'Alice Johnson', expertise: 'React', available: '2 PM - 5 PM' },
    { name: 'Michael Lee', expertise: 'Angular', available: '10 AM - 1 PM' },
  ];

  bookSession(mentorName: string) {
    console.log(`Booking session with ${mentorName}`);
  }

}

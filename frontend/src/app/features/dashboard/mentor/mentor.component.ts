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
  selector: 'app-mentor',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule],
  templateUrl: './mentor.component.html',
  styleUrl: './mentor.component.scss'
})
export class MentorComponent {
  mentees = [
    { name: 'John Doe', session: 'React Basics', time: '10:00 AM' },
    { name: 'Jane Smith', session: 'Angular Deep Dive', time: '12:00 PM' },
  ];

  scheduleSession() {
    console.log('Schedule a session clicked');
  }
}

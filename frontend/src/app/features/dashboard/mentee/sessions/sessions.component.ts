import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sessions',
  imports: [CommonModule, MatTabsModule, MatCardModule, MatButtonModule],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})

export class SessionsComponent {
  upcomingSessions = [
    { mentor: 'Alice Johnson', date: new Date(), time: '5:00 PM' }
  ];

  completedSessions = [
    { mentor: 'Dr. Smith', date: new Date('2024-02-01'), feedback: 4 }
  ];
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface Session {
  mentee: string;
  topic: string;
  date: string;
}

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'

})
export class SessionsComponent {
  sessions: Session[] = [
    {
      mentee: 'John Doe',
      topic: 'Angular Basics',
      date: '2024-03-20'
    }
  ];
}

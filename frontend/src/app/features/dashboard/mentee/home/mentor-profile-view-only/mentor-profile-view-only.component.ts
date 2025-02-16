import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-profile-view-only',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './mentor-profile-view-only.component.html',
  styleUrl: './mentor-profile-view-only.component.scss'
})
export class MentorProfileViewOnlyComponent {
  constructor(private _router: Router) {}
  mentorImage = 'https://randomuser.me/api/portraits/men/1.jpg';
  mentor = {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    bio: 'Experienced mentor with 10+ years in software development',
    about: 'Passionate about teaching and mentoring new developers',
    skills: ['Angular', 'React', 'Node.js'],
    experience: 10,
    expertise: 'Full Stack Development'
  };
  navigateToMessages() {
    // Implement the logic to navigate to messages
    console.log('Navigating to messages');
    this._router.navigate(['/mentee/dashboard/messages']);
  }
  navigateToBookSession() {
    this._router.navigate(['/mentee/dashboard/sessions/book-session']);
  }
}

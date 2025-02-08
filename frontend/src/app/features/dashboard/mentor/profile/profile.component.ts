import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'

})
export class ProfileComponent {
  mentor = {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    role: "Senior Software Engineer & Mentor",
    about: "Passionate about helping developers grow. 10+ years in the industry.",
    skills: ["Angular", "React", "Node.js", "GraphQL", "Machine Learning"],
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA"
  };
}

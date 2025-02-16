import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})

export class MessagesComponent {
  mentors = [
    { name: 'Alice Johnson', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Dr. Smith', image: 'https://randomuser.me/api/portraits/women/1.jpg' }
  ];

  selectedMentor: any = null;
  newMessage = '';
  constructor() {
    this.selectedMentor = this.mentors[0];
  }

  messages: { [key: string]: { text: string, sender: string }[] } = {
    'Alice Johnson': [{ text: 'Hello!', sender: 'mentor' }, { text: 'Hi Alice!', sender: 'me' }],
    'Dr. Smith': [{ text: 'Good morning!', sender: 'mentor' }, { text: 'Morning, Dr. Smith!', sender: 'me' }]
  };

  selectMentor(mentor: any) {
    this.selectedMentor = mentor;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedMentor) {
      this.messages[this.selectedMentor.name].push({ text: this.newMessage, sender: 'me' });
      this.newMessage = '';
    }
  }
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'

})
export class MessagesComponent {
  chats = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      lastMessage: "See you tomorrow!",
      messages: [
        { text: "Hey, how's it going?", sentBy: "mentee" },
        { text: "Good! How about you?", sentBy: "mentor" },
        { text: "Great, looking forward to our session.", sentBy: "mentee" }
      ]
    },
    {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      lastMessage: "Thanks for the tips!",
      messages: [
        { text: "Thanks for the session!", sentBy: "mentee" },
        { text: "You're welcome!", sentBy: "mentor" }
      ]
    }
  ];

  selectedChat: any = null;
  newMessage: string = '';

  selectChat(chat: any) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.selectedChat.messages.push({ text: this.newMessage, sentBy: "mentor" });
      this.newMessage = '';
    }
  }
}

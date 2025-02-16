import { Routes } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

import { MentorComponent } from './mentor.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


export const MentorDashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: MentorComponent,
    children: [
      { path: '', redirectTo: 'sessions', pathMatch: 'full' },
      { path: 'sessions', component: SessionsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit', component: EditProfileComponent }
    ]


  }
];

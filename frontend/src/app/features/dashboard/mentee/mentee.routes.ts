import { Routes } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { MenteeComponent } from './mentee.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MentorProfileViewOnlyComponent } from './home/mentor-profile-view-only/mentor-profile-view-only.component';
import { BookSessionComponent } from './sessions/book-session/book-session.component';

export const MenteeDashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: MenteeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'mentor-profile-view-only', component: MentorProfileViewOnlyComponent },
      { path: 'search', component: SearchComponent },
      { path: 'sessions', component: SessionsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/edit', component: EditProfileComponent },
      { path: 'sessions/book-session', component: BookSessionComponent }
    ]
  }
];

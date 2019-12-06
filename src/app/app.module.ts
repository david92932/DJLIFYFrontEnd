import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DJComponent } from './components/dj/dj.component';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule, MatMenuModule,
} from '@angular/material';

import { CreateEventComponentComponent } from './components/create-event-component/create-event-component.component';
import { EventComponentComponent } from './components/event-component/event-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  {path: 'event/create', component: CreateEventComponentComponent},
  {path: 'event/:ID', component: EventComponentComponent},
  {path: 'dj/login', component: LoginComponentComponent},
  // {path: 'dj/login', component: ProfileComponent},
  // {path: 'messages', component: MessagesComponent},
  // {path: 'messageDetails/:id', component: MessageDetailsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'}
];


@NgModule({
  declarations: [
    AppComponent,
    DJComponent,
    CreateEventComponentComponent,
    EventComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

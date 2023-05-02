import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervieweverComponent } from './interviewever/interviewever.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
// import { InterviewerUpdateComponent } from './interviewer-update/interviewer-update.component';
// import { InterviewerDashboardComponent } from './interviewerdashboard/interviewerdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervieweverComponent,
    UpdateComponent,
    // InterviewerUpdateComponent,
    // InterviewerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


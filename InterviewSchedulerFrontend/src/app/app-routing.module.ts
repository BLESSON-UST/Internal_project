import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntervieweverComponent } from './interviewever/interviewever.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"interviewer",pathMatch:"full"},
   {path:"interviewer",component:IntervieweverComponent},
   {path:"update",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

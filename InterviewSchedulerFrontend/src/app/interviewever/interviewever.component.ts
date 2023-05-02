import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';



function emailDomainValidator(domainName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === domainName.toLowerCase()) {
      return null;
    } else {
      return { 'invalidDomain': true };
    }
  };
}
@Component({
  selector: 'app-interviewever',
  templateUrl: './interviewever.component.html',
  styleUrls: ['./interviewever.component.css']
})
export class IntervieweverComponent implements OnInit {
  getInterviewerById(id: string | null): IntervieweverComponent | undefined {
    throw new Error('Method not implemented.');
  }

  interviewever!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.interviewever = this.fb.group({
      interviewerEmail: ['', [Validators.required, Validators.email, emailDomainValidator('ust.com')]],
      
    });
  }
   

// export class IntervieweverComponent  {

  
  


//   message = "The data is saved succesfully";

// putinfo() {
// alert(this.message);
// }
  
    public interviewer = {
      interviewerId: '',
      interviewerName: '',
      interviewerEmail: '',
      interviewerRole: '',
      interviewerSkills: '',
      interviewerExperience: null,
      availableDate: '',
      availableTime: ''
    };
  
    public scheduleInterview() {
      console.log(this.interviewer);
      // Add logic to save the interviewer data

      
    
  
 
}

}

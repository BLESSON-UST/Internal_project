import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  users:any;
  email:string | undefined;
  service: any;
  
  // constructor(private service:UserRegistationService) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data: any)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data: any)=>this.users=data);
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data: any)=>this.users=data);
  }

}




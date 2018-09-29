import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { EnrollService } from '../../assets/enroll.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern= "^[a-z0-9,_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  users=[];
  password1="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})";
  
  constructor(private route:Router,private enrollService:EnrollService) { }

  ngOnInit() {
  }
  onSubmit(name:string,username:string){
    //this.enrollService.insertParticipant(name,username).subscribe((data:any)=>{
      //console.log(data);
      this.route.navigate(['/home']);
    
  }
    

}

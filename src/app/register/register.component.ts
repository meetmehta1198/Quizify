import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { EnrollService } from '../../assets/enroll.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern= "^[a-z0-9,_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  users=[];
  password1="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})";
  
  constructor(private route:Router,private AuthService:AuthService) { }

  ngOnInit() {
  }
  onSubmit(name:string,username:string,password:string,email:string,phone:string,gender:string){
    //this.enrollService.insertParticipant(name,username).subscribe((data:any)=>{
      //console.log(data);
      var user={
        name,
        username,
        password,
        email,
        phone,
        gender
      }
      console.log(user)
      this.AuthService.registerUser(user).subscribe(data=>{
        console.log(data)
        if(data)
          this.route.navigate(['/home']);
        else
          this.route.navigate(['/register'])
      })
      
    
  }
    

}

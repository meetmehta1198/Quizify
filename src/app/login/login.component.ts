import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private AuthService:AuthService) { }
  public checkLogin=false
  ngOnInit() {
    
  }
  
  onSubmit(username:string,password:string){
    var user={
      username,
      password
    }
    localStorage.setItem("user",username)
    this.AuthService.loginUser(user).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/home']);
      else  
      {
        this.checkLogin=true;
        //this.route.navigate(['/login'])
      }
    })
    
  }
  SignUp()
  {
      this.route.navigate(['/register'])
  }
}

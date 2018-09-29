import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser:boolean;
  
  name:string;
  constructor(private route:Router) { }

  ngOnInit() {
    this.name=localStorage.getItem("user");
    console.log(this.name);
    if(this.name!=null)
    {
      console.log("helo");
      this.isUser=true;
    }
    
    else
      this.isUser=false;
  }
  Login()
  {
   
    this.route.navigate(['/login']);
  }
  SignOut()
  {
    this.isUser=false;
    localStorage.clear();
    this.route.navigate(['/home']);
  }
}

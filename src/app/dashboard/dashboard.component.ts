import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/assets/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public q=[]
  constructor(public route:Router,public quizService:QuizService) { }

  ngOnInit() {

    var temp;
    this.quizService.showDashboard(localStorage.getItem("user")).subscribe(data=>{
      console.log(data)
      this.q=data;
     // console.log(temp[0].username)
    })

  }
  onSubmit()
  {
    this.route.navigate(['/home'])
  }

}

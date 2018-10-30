import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  
 
  constructor(private route:Router) { }

  ngOnInit() {
  
  }
  onSubmit(quizType:string,noOfQuestion:string)
  {
    //console.log(quizType)
    //sessionStorage.setItem("quizName",quizName)
    sessionStorage.setItem("type",quizType)
    sessionStorage.setItem("no",noOfQuestion)
    this.route.navigate(['/add'])
  }
}

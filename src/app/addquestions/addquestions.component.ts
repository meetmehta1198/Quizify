import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/assets/quiz.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {
  n:number=0
  
  value1=parseInt(sessionStorage.getItem("no"))
  constructor(private route:Router,public quizService:QuizService) { }

  ngOnInit() {
    console.log(this.quizService.count)
    //this.quizService.count=0;
  }
  onSubmit(question:string,option1:string,option2:string,option3:string,option4:string,correctAnswer:string)
  {
    var ob={
      question,
      option1,
      option2,
      option3,
      option4,
      correctAnswer
    }
    console.log(ob)
   
    if(this.quizService.count==this.value1)
    {
      this.route.navigate(['/home'])
    }
    else
    {
      this.quizService.count++;
     //s window.location.reload();
      this.route.navigate(['/add'])
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuizService } from '../../assets/quiz.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  public q=[];   
  correctAnswer:number;
  constructor(private route:Router,private quizService:QuizService) 
  { }

  ngOnInit() {
    if(localStorage.getItem("user")==null)
    {
     this.route.navigate(['/login']); 
    }
    this.correctAnswer=0;
    this.quizService.qnsProgress=0;
    this.quizService.seconds=0;
    this.quizService.getQuestions1().subscribe(data=>{
      console.log(data)
      //this.quesList=data;
      //console.log(this.quesList);
      //var obj=JSON.stringify(this.quesList);
      //console.log(obj);
      this.q=data;
      console.log(this.q);
   // console.log(this.q[0].options[0]);
   localStorage.setItem("quiz","banking");
      this.startTimer();
    }
    );
  }
  startTimer()
  {
      this.quizService.timer=setInterval(()=>{
        this.quizService.seconds++;
      },1000);
  }
  Answer(qId,choice)
  {
    console.log(qId.answer);
    console.log(choice);
   if(choice==qId.answer)
   {
      this.quizService.qnsProgress++;
     this.correctAnswer++;
     localStorage.setItem("correctAnswer",this.correctAnswer.toString());
   }
   else
   {
    this.quizService.qnsProgress++;

   }
   localStorage.setItem("time",this.displayTimeElapsed().toString());
   console.log(localStorage.getItem("time"))
   
    if(this.quizService.qnsProgress==2)
    {
      clearInterval(this.quizService.timer);
      this.route.navigate(['/result']);
    }
  }
  displayTimeElapsed()
  {
    return Math.floor(this.quizService.seconds/3600)+':'+Math.floor(this.quizService.seconds/60)+':'+Math.floor(this.quizService.seconds%60);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../assets/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class QuizComponent implements OnInit {

  
  public q=[]; 
  public answer=[];  
  
  correctAnswer:number;
  //public ans=[];
 
  constructor(private route:Router,public quizService:QuizService) 
  { }

  ngOnInit() {
    localStorage.removeItem("correctAnswer")
    localStorage.removeItem("totalQuestion")
    console.log(localStorage.getItem("user"))
    if(localStorage.getItem("user")==null)
    {
     this.route.navigate(['/login']); 
    }
    
    this.correctAnswer=0;
    this.quizService.qnsProgress=0;
    this.quizService.seconds=0;
    this.quizService.getQuestions(localStorage.getItem("quiz")).subscribe(data=>{
      console.log(data)
      this.q=data
      console.log(this.q)
   //localStorage.setItem("quiz","programming");
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
    
    this.answer[this.quizService.qnsProgress]=choice;
      
    //console.log(this.answer);
    console.log(qId.answer);
    console.log(choice);
    var temp=choice.toString()
   if(temp==qId.answer)
   {
    
      this.quizService.qnsProgress++;
      console.log("in if");
     this.correctAnswer++;
     localStorage.setItem("correctAnswer",this.correctAnswer.toString());
     console.log(localStorage.getItem("correctAnswer"))
   }
   else
   {
  
    this.quizService.qnsProgress++;

   }
   localStorage.setItem("time",this.displayTimeElapsed.toString());
   //console.log(localStorage.getItem("time"))
   
    if(this.quizService.qnsProgress==this.q.length)
    {
      localStorage.setItem("ans",JSON.stringify(this.answer));
      //console.log(localStorage.getItem("ans"));
            clearInterval(this.quizService.timer);
      this.route.navigate(['/result']);
    }
    localStorage.setItem("totalQuestion",this.q.length.toString())
  }
  displayTimeElapsed()
  {
    return Math.floor(this.quizService.seconds/3600)+':'+Math.floor(this.quizService.seconds/60)+':'+Math.floor(this.quizService.seconds%60);
  }
  
}

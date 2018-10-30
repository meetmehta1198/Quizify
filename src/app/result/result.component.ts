import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../assets/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public tanswer:string=localStorage.getItem("correctAnswer");
  public uname:string=localStorage.getItem("user");
  public time:string=localStorage.getItem("time");
  
  public totalQuestion;
  public q=[];
  public ans=[];
  constructor(private route:Router,private quizService:QuizService) { }

  ngOnInit() {
    console.log(this.tanswer)
    var temp1:number=0
    var temp=localStorage.getItem("ans");
      console.log(temp);
      console.log(localStorage.getItem("quiz"));
      this.ans=JSON.parse(temp);
      console.log(this.ans[0]);
      var type=localStorage.getItem("quiz")
      
    if(localStorage.getItem("user")==null)
    {
     this.route.navigate(['/login']); 
    }
    
    this.quizService.getQuestions(type).subscribe(data=>{
        console.log(data)
        //this.quesList=data;
        //console.log(this.quesList);
        //var obj=JSON.stringify(this.quesList);
        //console.log(obj);
        this.q=data;
     // console.log(this.q[0].options[0]);
        this.totalQuestion=this.q.length
      }
      );
    
      var temp=localStorage.getItem("ans");
      console.log(temp);
      var username:string=this.uname
      var quizName:string=type
      var correctAnswer:string=this.tanswer
      var totalQuestions=localStorage.getItem("totalQuestion")
      var time:string=this.quizService.displayTimeElapsed()
      if(correctAnswer==null)
        correctAnswer=temp1.toString()
      var scoreData={
      username,
      quizName,
      correctAnswer,
      totalQuestions,
      time



      }
      console.log(scoreData)
      this.quizService.updateScore(scoreData).subscribe(data=>{
        console.log(data)
      })
    }
    
  
  restart()
  {
    localStorage.removeItem("correctAnswer")
    if(localStorage.getItem("quiz")=="banking")
      this.route.navigate(['/bank'])
    else
      this.route.navigate(['/quiz'])
  }
  onSubmit()
  {
    this.route.navigate(['/dashboard'])
  }
}

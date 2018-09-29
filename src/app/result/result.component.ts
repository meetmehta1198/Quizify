import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../assets/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  tanswer=localStorage.getItem("correctAnswer");
  uname=localStorage.getItem("user");
  time=localStorage.getItem("time");
  public q=[];
  public ans=[];
  constructor(private route:Router,private quizService:QuizService) { }

  ngOnInit() {
    var temp=localStorage.getItem("ans");
      console.log(temp);
      this.ans=JSON.parse(temp);
      console.log(this.ans[0]);
    if(localStorage.getItem("user")==null)
    {
     this.route.navigate(['/login']); 
    }
    if(localStorage.getItem("quiz")=="banking")
    {
      this.quizService.getQuestions1().subscribe(data=>{
        console.log(data)
        //this.quesList=data;
        //console.log(this.quesList);
        //var obj=JSON.stringify(this.quesList);
        //console.log(obj);
        this.q=data;
     // console.log(this.q[0].options[0]);
        
      }
      );
    }
    else if(localStorage.getItem("quiz")=="programming")
    {
      this.quizService.getQuestions().subscribe(data=>{
        console.log(data)
        //this.quesList=data;
        //console.log(this.quesList);
        //var obj=JSON.stringify(this.quesList);
        //console.log(obj);
        this.q=data;
     // console.log(this.q[0].options[0]);
        
      }
      );
      var temp=localStorage.getItem("ans");
      console.log(temp);
    }
    
  }
  restart()
  {
    if(localStorage.getItem("quiz")=="banking")
      this.route.navigate(['/bank'])
    else
      this.route.navigate(['/quiz'])
  }
}

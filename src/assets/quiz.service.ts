  import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../List';


@Injectable()
export class QuizService {

  qns:any[];
  answer:any[];
  seconds:number;
  timer;  
  qnsProgress:number;
  count:number=0;
  
 
  private _getQuestion='http://localhost:8081/quiz'
  private _dashboard='http://localhost:8081/dashboard'
  private _update='http://localhost:8081/updateScore'
  constructor(private _http :HttpClient) { }
  getQuestions(quizType:string):Observable<Questions[]>
  {
    var params=new HttpParams();
    params=params.append('quizType',quizType)
    return this._http.get<Questions[]>(this._getQuestion,{params:params})
  }
  displayTimeElapsed()
  {
    return Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds%60);
  }
  updateScore(data)
  {
    return this._http.post(this._update,data)
  }
  showDashboard(username:string)
  {
    var params=new HttpParams();
    params=params.append('username',username)
    return this._http.get<any>(this._dashboard,{params:params})
  }

}

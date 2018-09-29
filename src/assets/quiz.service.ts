  import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../List';


@Injectable()
export class QuizService {

  qns:any[];
  answer:any[];
  seconds:number;
  timer;  
  qnsProgress:number;
  private _url:string="/assets/question.json";
  private _url1:string="/assets/banking.json";
  constructor(private _http :HttpClient) { }
  getQuestions():Observable<Questions[]>
  {
    
    return this._http.get<Questions[]>(this._url)
  }
  displayTimeElapsed()
  {
    return Math.floor(this.seconds/3600)+':'+Math.floor(this.seconds/60)+':'+Math.floor(this.seconds%60);
  }
  getQuestions1():Observable<Questions[]>
  {
    
    return this._http.get<Questions[]>(this._url1)
  }
}

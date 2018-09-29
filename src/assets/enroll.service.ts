import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EnrollService {

  private _url="./assets/user.json";
  constructor(private _http:HttpClient) { }
  insertParticipant(name:string,username:string)
  {
    var body={
      Name:name,
      Username:username
    }
   
    var obj=JSON.stringify(body);
    //console.log(obj)
    return this._http.post(this._url,obj);
  }
}

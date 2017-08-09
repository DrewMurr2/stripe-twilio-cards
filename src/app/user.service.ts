import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private serverUrl: string = "http://localhost:3000/api/";
  loggedIn: boolean = false
  email: string
  password: string
  stripeId: string
  _id: string

  user: any = { firm: "string", email: "string" }

  post(bodyObj, url) {
    const body = JSON.stringify(bodyObj);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.serverUrl + url, body, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  createUserInDB(stripeReturnObject) {
    return this.post(stripeReturnObject, 'createUserInDB')
  }

  testapi() {
    return this.post({}, 'sample')
  }
}


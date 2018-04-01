import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class LoginService {

  constructor( private http:HttpClient ) { }

  makeLogin(user, password){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    let body = {
      email:user,
      password:password
    }

    return this.http.post('http://mascotas.com/auth', body, { headers })
  }
}

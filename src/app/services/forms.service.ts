import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class FormsService {

  constructor(
    private http:HttpClient
  ) { }

  sendContact(body){
    console.log(body)

    let data = JSON.stringify(body)
    let headers: any = new Headers();
    //headers.append('Content-Type', 'application/json');
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Method','POST');

    console.log(headers);

    return this.http.post('http://assistpet.com.ar/forms/mail.php', data, {headers});

  }

  sendApply(body){
    console.log(body)

    let data = JSON.stringify(body)
    let headers: any = new Headers();
    //headers.append('Content-Type', 'application/json');
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Method','POST');

    console.log(headers);

    return this.http.post('http://assistpet.com.ar/forms/mail2.php', data, {headers});

  }


}

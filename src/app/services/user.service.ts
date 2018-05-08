import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getPet(user){

    return this.http.get('http://assistpet.com.ar/api/pets/'+user);

  }

}

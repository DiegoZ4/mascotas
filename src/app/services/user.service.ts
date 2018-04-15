import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getPet(user){

    return this.http.get('http://mascotas.com/api/pets/'+user);

  }

}

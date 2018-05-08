import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class ArticleService {

  constructor(
    private http:HttpClient
  ) { }

  getArticles(){

    return this.http.get('http://assistpet.com.ar/api/articles/');

  }

  getArticle(id){

    return this.http.get('http://assistpet.com.ar/api/articles/'+id);

  }

}

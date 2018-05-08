import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styles: []
})
export class ArticuloComponent implements OnInit {

  articles = [];
  article:string;
  articleData = {
    title:"",
    desc:"",
    images: [],
    volanta:"",
    content:"",
    category:{
      name:""
    }
  };


  constructor(
    private _activatedRoute:ActivatedRoute,
    private _article:ArticleService
  ) { }


  ngOnInit() {
    this._activatedRoute.params
        .subscribe(params =>{

          this.article = params.id;
          console.log(this.article);

          this._article.getArticle(this.article)
              .subscribe((resp:any)=>{
                this.articleData = resp;
                console.log(this.articleData);
              })
        });

    this._article.getArticles()
        .subscribe((resp:any) => {
          this.articles = resp.data;
          console.log(this.articles);
        })

  }

}

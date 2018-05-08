import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../services/articles.service';

@Component({
  selector: 'app-articulos-home',
  templateUrl: './articulos.component.html',
  styles: []
})
export class ArticulosHomeComponent implements OnInit {

  articles = [];

  constructor(
    private _article:ArticleService
  ) {

  }

  ngOnInit() {
    this._article.getArticles()
    .subscribe((resp:any) => {
      this.articles = resp.data;
      console.log(this.articles);
    })
  }

}

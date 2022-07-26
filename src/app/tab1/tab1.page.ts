import { Component } from '@angular/core';
import { NewsService } from '../service/news.service';
import { News } from '../model/news.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  news: News[] = [];

  constructor( 
    private newsService : NewsService) { }

  ngOnInit() {

this.news = this.newsService.getNews();

  }

}

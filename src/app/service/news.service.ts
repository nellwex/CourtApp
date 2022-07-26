import { Injectable } from '@angular/core';
import { News } from "../model/news.model";
import { NEWS } from "./news.mock";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

news: News[] = NEWS

  constructor() { }

  getNews() : News[]{
   return this.news 
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface NewsConfig {
  heroText: string;
  heroTextByLine: string;
  articles: Article[];
}
export interface Article {
  headline: string;
  date: string;
  url: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public configStructure: NewsConfig;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.http
      .get('assets/cms-content/news.json')
      .subscribe((res: NewsConfig) => {
        res.articles.forEach((article) => {
          article.url = this.sanitizer.sanitize(
            SecurityContext.URL,
            article.url
          );
        });
        this.configStructure = res;
      });
  }
}

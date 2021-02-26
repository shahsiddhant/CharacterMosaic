import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface CharacterInfo {
  name: string;
  description: string;
  image: string;
  url: string;
  downloadUrl: string;
}
@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css'],
})
export class CharacterSummaryComponent implements OnInit {
  public characters: CharacterInfo[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.http
      .get('assets/cms-content/characters.json')
      .subscribe((res: any) => {
        this.characters = res.characters;
      });
  }
}

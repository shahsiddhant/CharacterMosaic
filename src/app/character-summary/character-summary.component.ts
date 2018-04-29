import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {
  public characters = [
    {
      name: 'Em',
      description: `Emerald is a young Black and White racially mixed woman growing up in the inner
      city culture of Pittsburgh, PA.`,
      image: './assets/Em_crop.jpg',
      url: 'Em'
    }, {
      name: 'Omar',
      description: 'Omar represents the working class from the country side across all Central/Latin America.',
      image: './assets/03_Omar_crop.jpg',
      url: 'Omar'
    }, {
      name: 'Edith',
      description: `Edith is a beautiful and independent young lady who can
      often be introverted.`,
      image: './assets/Edith_Crop.jpg',
      url: 'Edith'
    }, {
      name: 'Marty',
      description: `Born in the year 1901, Marty came out of the womb playing along to the records of
      Louis Armstrong.`,
      image: './assets/04_Marty_crop.jpg',
      url: 'Marty'
    }, {
      name: 'Thokmay',
      description: 'Thokmay, pronounced TOK-meh, meaning unobstructed, unhindered, has been raised in the monastery as an orphan.',
      image: './assets/Thokmay.jpg',
      url: 'Thokmay'
    }, {
      name: 'Konrad',
      description: 'Second generation German Arab writer.',
      image: './assets/6_7_8_Konrad_crop.jpg',
      url: 'Konrad'
    }, {
      name: 'Shola',
      description: 'Young girl from Karonga, Malawi, who lost her arm to intruders at the age of six.',
      image: './assets/6_7_8_Shola_crop.jpg',
      url: 'Shola'
    }, {
      name: 'Yannathan',
      description: 'Yannathan, which means “walk about, travel or roam” is an 18 year old hunter from the 1830s.',
      image: './assets/Yannathan.jpg',
      url: 'Yannathan'
    }
  ];


  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

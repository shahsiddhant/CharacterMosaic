import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {
  public characters = [
    {
      name: 'Edith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/01_edith_crop.jpg',
      url: 'Shawn'
    },
    {
      name: 'Em',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/01_Em_Crop.jpg',
      url: 'Em'
    },
    {
      name: 'Omar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/03_Omar_crop.jpg',
      url: 'Omar'
    }, {
      name: 'Marty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/04_Marty_crop.jpg',
      url: 'Marty'
    }, {
      name: 'Thokmay',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/05_Thokmay_crop.jpg',
      url: 'Thokmay'
    }, {
      name: 'Konrad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/6_7_8_Konrad_crop.jpg',
      url: 'Konrad'
    }, {
      name: 'Shola',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/6_7_8_Shola_crop.jpg',
      url: 'Shola'
    }, {
      name: 'Yannathan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/6_7_8_Yannathan_crop.jpg',
      url: 'Yannathan'
    }, {
      name: 'Em',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/EmStraightFaceSketch.png',
      url: 'Em'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {
  public characters = [
    {
      name: 'Shawn',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/Shawn.jpg',
      url: '/Shawn'
    },
    {
      name: 'Casie',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/Casie.jpg',
      url: '/Casie'
    },
    {
      name: 'Amanda',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/Amanda.jpg',
      url: '/Amanda'
    }, {
      name: 'Nathan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque',
      image: './assets/Nathan.jpg',
      url: '/Nathan'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}

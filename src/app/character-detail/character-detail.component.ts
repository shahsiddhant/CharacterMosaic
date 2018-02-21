import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  public name;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.name = params.id;
    } );
  }

}

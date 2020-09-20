import { Component, Input, OnInit } from "@angular/core";
import { CharacterInfo } from "../character-summary/character-summary.component";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.css"],
})
export class CharacterCardComponent implements OnInit {
  @Input() characterInfo: CharacterInfo;

  constructor() {}

  ngOnInit() {}
}

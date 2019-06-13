import { Component, OnInit } from "@angular/core";
import { UFOSighting } from "../ufo";
import { UFOSIGHTINGS } from "../mock-ufos";

@Component({
  selector: "app-ufo-component",
  templateUrl: "./ufo-component.component.html",
  styleUrls: ["./ufo-component.component.css"]
})
export class UfoComponent implements OnInit {
  ufosightings = UFOSIGHTINGS;
  selectedSighting: UFOSighting;
  start = 0;
  end = 4;
  disabledInc = false;
  disabledDec = true;
  oddsData = [
    {
      id: 0,
      label: "chances of seeing a ufo",
      value: 10,
      color: "red"
    },
    {
      id: 1,
      label: "chances of not seeing a ufo",
      value: 90,
      color: "blue"
    }
  ];

  onSelect(ufosighting: UFOSighting): void {
    this.selectedSighting = ufosighting;
    this.oddsData = [
      {
        id: 0,
        label: "chances of seeing a ufo",
        value: this.selectedSighting.odds,
        color: "red"
      },
      {
        id: 1,
        label: "chances of not seeing a ufo",
        value: 100 - this.selectedSighting.odds,
        color: "blue"
      }
    ];
  }

  constructor() {}

  onIncrement(): void {
    if (this.end + 1 > this.ufosightings.length) {
      this.disabledInc = true;
    } else {
      this.start += 1;
      this.end += 1;
      this.disabledInc = false;
      this.disabledDec = false;
    }
  }

  onDecrement(): void {
    if (this.start - 1 < 0) {
      this.disabledDec = true;
    } else {
      this.start -= 1;
      this.end -= 1;
      this.disabledDec = false;
      this.disabledInc = false;
    }
  }

  ngOnInit() {}
}

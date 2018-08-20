import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.styl']
})
export class ShipComponent implements OnInit {
  @Input() widthIndex: number;
  public focus = 0;

  public basicSize = 30;
  public privateWidth: number;
  public classList: string[] = [
    'Ship',
  ];

  constructor() { }

  ngOnInit() {
    this.privateWidth = this.basicSize * this.widthIndex;
  }



}

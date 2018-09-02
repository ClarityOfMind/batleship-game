import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.styl']
})
export class ShipComponent implements OnInit {
  @Input() class: string;
  @Input() widthIndex: number;
  @Input() health: number;

  public basicSize = 30;
  public privateWidth: number;

  constructor() { }

  ngOnInit() {
    this.privateWidth = this.basicSize * this.widthIndex;
  }

}

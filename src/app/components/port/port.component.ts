import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.styl']
})
export class PortComponent implements OnInit {
  @Input() ships;

  constructor() { }

  ngOnInit() {
  }

}

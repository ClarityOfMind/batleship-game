import { Component, OnInit, Input } from '@angular/core';
import { FireService } from '../../services/fire-service/fire.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.styl']
})
export class PortComponent implements OnInit {
  @Input() ships;

  constructor(
    private _fireService: FireService
  ) { }

  ngOnInit() {
  }

}

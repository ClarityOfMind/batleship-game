import { Component, OnInit, Input } from '@angular/core';
import { ShotLogService } from '../../services/shot-log-service/shot-log.service';

@Component({
  selector: 'app-shot-log',
  templateUrl: './shot-log.component.html',
  styleUrls: ['./shot-log.component.styl']
})
export class ShotLogComponent implements OnInit {
  @Input () public owner: string;
  public logArray: string[];

  constructor(private _shotLogService: ShotLogService) {
  }

  ngOnInit() {
    this.logArray = this._shotLogService.getLog(this.owner);
    console.log(this.logArray);
  }


}

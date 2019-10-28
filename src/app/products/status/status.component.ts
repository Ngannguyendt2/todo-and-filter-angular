import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Output() status = new EventEmitter<string>();

  changeStatus(status) {
    this.status.emit(status);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

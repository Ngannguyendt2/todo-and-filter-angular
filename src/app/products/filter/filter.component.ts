import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  keyword: string;
  @Output() filter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  keyWordOutPut() {
    this.filter.emit(this.keyword);
  }
}

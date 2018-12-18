import { Component, OnInit } from '@angular/core';
import { PRESENTS } from '../mock-presents';
import { Present } from '../present';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.component.html',
  styleUrls: ['./presents.component.scss']
})
export class PresentsComponent implements OnInit {
  presents: Present[] = PRESENTS;

  constructor() { }

  ngOnInit() {
  }

}

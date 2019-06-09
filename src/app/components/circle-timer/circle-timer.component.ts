import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent implements OnInit {
  @Output() pressed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent implements OnInit {
  @Output() pressed = new EventEmitter<boolean>();
  @Input() progress: number;
  @Input() value: number;
  @Input() timerPaused: boolean;

  constructor() {}

  ngOnInit() {}
}

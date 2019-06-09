import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITimer } from '../../services/timer.service';
import { TimerTypeEnum } from './../../services/timer.service';

@Component({
  selector: 'app-circle-timer',
  templateUrl: './circle-timer.component.html',
  styleUrls: ['./circle-timer.component.scss']
})
export class CircleTimerComponent implements OnInit {
  @Output() pressed = new EventEmitter<boolean>();
  @Input() timer: ITimer;
  public timerTypeEnum = TimerTypeEnum;

  constructor() {}

  ngOnInit() {}

  get progress(): string {
    if (this.isEnded) {
      return '0%';
    }

    return this.timer.progress === 0 ? '100%' : `${this.timer.progress}%`;
  }

  get isEnded(): boolean {
    return this.timer.score === this.timer.maxScore;
  }
}

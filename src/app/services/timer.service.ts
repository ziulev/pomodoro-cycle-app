import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

export interface ITimer {
  value: number;
  progress: number;
  started: boolean;
  paused: boolean;
  type: TimerTypeEnum;
  score: number;
  maxScore: number;
}

export enum TimerTypeEnum {
  default,
  break
}

export interface ITimerConfig {
  defaultLimit: number;
  breakLimit: number;
  maxScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {
  private config: ITimerConfig = {
    defaultLimit: 30000,
    breakLimit: 10000,
    maxScore: 8
  };
  private value = 0;
  private counter = 0;
  private score = 0;
  private timerStarted: boolean;
  private timerPaused: boolean;
  private timerSubscription: Subscription;
  private currentType: TimerTypeEnum = TimerTypeEnum.default;

  get timer(): ITimer {
    return {
      value: this.value,
      progress: this.progress,
      started: this.timerStarted,
      paused: this.timerPaused,
      type: this.currentType,
      score: this.score,
      maxScore: this.config.maxScore
    };
  }

  get limit(): number {
    return this.currentType === TimerTypeEnum.default ? this.config.defaultLimit : this.config.breakLimit;
  }

  get progress(): number {
    return Math.floor((this.value / this.limit) * 100);
  }

  toggleStart(config: ITimerConfig) {
    if (this.timerSubscription) {
      if (this.timerStarted) {
        this.togglePause();
      } else if (this.score < this.config.maxScore) {
        this.timerStarted = true;
      }

      return;
    }

    this.config = config;
    this.timerStarted = true;

    this.timerSubscription = timer(0, 1000).subscribe(_ => {
      if (this.timerStarted && !this.timerPaused) {
        if (this.limit === this.counter) {
          this.onEndedInterval();
        } else {
          this.counter++;
          this.value = this.limit - this.counter;
        }
      }
    });
  }

  onEndedInterval() {
    this.timerStarted = false;
    if (this.currentType === TimerTypeEnum.default) {
      this.score++;
    }

    if (this.score < this.config.maxScore) {
      console.log(123, this.progress);
      this.counter = 0;
      this.value = 0;
    }

    this.currentType = this.currentType === TimerTypeEnum.default ? TimerTypeEnum.break : TimerTypeEnum.default;
  }

  togglePause() {
    this.timerPaused = !this.timerPaused;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { AudioService, AudioSourcesEnum } from './audio.service';
import { ConfigEnum, ConfigService } from './config.service';
import { ElectronService } from './electron.service';

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
    defaultLimit: 24000,
    breakLimit: 300,
    maxScore: 8
  };
  private value = 0;
  private counter = 0;
  private score = 0;
  private timerStarted: boolean;
  private timerPaused: boolean;
  private timerSubscription: Subscription;
  private currentType: TimerTypeEnum = TimerTypeEnum.default;
  private audioSourcesEnum = AudioSourcesEnum;
  private configEnum = ConfigEnum;

  constructor(
    private electronService: ElectronService,
    private configService: ConfigService,
    private audioService: AudioService,
    private router: Router
  ) {}

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

  toggleStart(config?: ITimerConfig) {
    if (this.timerSubscription) {
      if (this.timerStarted) {
        this.togglePause();
      } else if (this.score < this.config.maxScore) {
        this.timerStarted = true;
      }

      return;
    }

    if (config) {
      this.config = config;
    }

    this.timerStarted = true;

    this.timerSubscription = timer(0, 1000).subscribe(_ => {
      if (this.timerStarted && !this.timerPaused) {
        // Play sound
        if (this.counter + 1 === this.limit && this.configService.getValue(this.configEnum.audioEnabled)) {
          if (this.currentType === TimerTypeEnum.default) {
            this.audioService.play(this.audioSourcesEnum.default);
          } else {
            this.audioService.play(this.audioSourcesEnum.break);
          }
        }

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
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/');
    }
    this.electronService.showWindow();

    if (this.currentType === TimerTypeEnum.default) {
      this.score++;
    }

    if (this.score < this.config.maxScore) {
      this.counter = 0;
      this.value = 0;

      if (this.configService.getValue(this.configEnum.autostartEnabled)) {
        this.timerStarted = true;
      }
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

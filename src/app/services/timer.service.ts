import { Injectable, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {
  // value$ = new BehaviorSubject(0);
  private _value = 0;
  private counter = 0;
  private limit: number;
  private timerPaused: boolean;
  private timerSubscription: Subscription;

  get value(): number {
    return this._value;
  }

  get timerStarted(): boolean {
    return !!this.timerSubscription;
  }

  get progress(): number {
    return Math.floor((this.value / this.limit) * 100);
  }

  start(limit: number) {
    if (this.timerStarted) {
      console.warn('Timer was already started');
      this.togglePause();
      return;
    }

    this.limit = limit;

    this.timerSubscription = timer(0, 1000).subscribe(_ => {
      if (!this.timerPaused && !(this.limit === this.counter)) {
        this.counter++;
        this._value = this.limit - this.counter;
      }
    });
  }

  togglePause() {
    this.timerPaused = !this.timerPaused;
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}

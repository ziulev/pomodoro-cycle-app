import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnChanges {
  @Input() label: string;
  @Input() defaultValue: number;
  @Output() changed = new EventEmitter<number>();
  public model: number;
  public modelChanged$ = new Subject<number>();

  constructor() {
    this.modelChanged$.pipe(debounceTime(50)).subscribe(v => {
      if (v && v > 0 && v <= 999) {
        this.changed.emit(v);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.defaultValue) {
      this.model = changes.defaultValue.currentValue;
    }
  }

  public onKeyPressed(event: KeyboardEvent) {
    const number = parseInt(event.key, 10);
    if (isNaN(number)) {
      return false;
    }
    return this.model
      ? parseInt(`${this.model}${number}`, 10) <= 999 && parseInt(`${this.model}${number}`, 10) > 0
      : number > 0;
  }

  public onPlusOrMinusPressed(increment: boolean) {
    if (increment) {
      if (this.model < 999) {
        this.model++;
        this.modelChanged$.next(this.model);
      }
    } else {
      if (this.model > 1) {
        this.model--;
        this.modelChanged$.next(this.model);
      }
    }
  }
}

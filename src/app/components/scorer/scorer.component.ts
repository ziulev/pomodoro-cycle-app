import { Component, Input } from '@angular/core';
import { ITimer } from '../../services/timer.service';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.scss']
})
export class ScorerComponent {
  @Input() timer: ITimer;

  get scores(): boolean[] {
    return Array.from({ length: this.timer.maxScore }).map((_, index) => index + 1 <= this.timer.score);
  }
}

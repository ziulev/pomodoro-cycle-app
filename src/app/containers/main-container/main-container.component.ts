import { Component } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  public controls: IControl[] = [
    {
      path: '/preferences',
      icon: 'switch-on'
    }
  ];

  constructor(public timerService: TimerService) {}

  public onPressedCircle() {
    this.timerService.toggleStart({ defaultLimit: 2400, breakLimit: 300, maxScore: 8 });
  }
}

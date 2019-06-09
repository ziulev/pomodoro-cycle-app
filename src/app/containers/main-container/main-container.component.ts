import { Component, OnInit } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  public limit = 30;
  public controls: IControl[] = [
    {
      path: '/info',
      icon: 'info'
    }
  ];
  // public progress = 100;

  constructor(public timerService: TimerService) {}

  ngOnInit() {
    // this.timerService.value$.subscribe(v => (this.progress = Math.floor((v / this.limit) * 100)));
  }

  public onPressedCircle() {
    // console.log(123);
    this.timerService.start(this.limit);
  }
}

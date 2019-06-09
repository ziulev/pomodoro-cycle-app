import { Component, OnInit } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  public controls: IControl[] = [
    {
      path: '/info',
      icon: 'info'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

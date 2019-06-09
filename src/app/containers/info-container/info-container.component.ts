import { Component, OnInit } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {
  public controls: IControl[] = [
    {
      path: '/',
      icon: 'left-arrow'
    }
  ];

  constructor() {}

  ngOnInit() {}
}

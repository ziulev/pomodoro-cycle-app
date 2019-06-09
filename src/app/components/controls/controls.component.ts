import { Component, Input, OnInit } from '@angular/core';

export interface IControl {
  path: string;
  icon: string;
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() controls: IControl[];
  @Input() isSingleRight: boolean;

  constructor() {}

  ngOnInit() {}
}

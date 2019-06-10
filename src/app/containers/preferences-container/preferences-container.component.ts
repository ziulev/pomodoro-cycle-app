import { Component, OnInit } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';
import { ConfigService } from './../../services/config.service';

@Component({
  selector: 'app-preferences-container',
  templateUrl: './preferences-container.component.html',
  styleUrls: ['./preferences-container.component.scss']
})
export class PreferencesContainerComponent implements OnInit {
  public controls: IControl[] = [
    {
      path: '/',
      icon: 'left-arrow'
    }
  ];

  constructor(public configService: ConfigService) {}

  ngOnInit() {}

  public onChangedAutoSave(value: boolean) {
    this.configService.autostart = value;
  }
}

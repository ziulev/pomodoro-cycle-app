import { Component, OnInit } from '@angular/core';
import { IControl } from '../../components/controls/controls.component';
import { ConfigEnum, ConfigService } from './../../services/config.service';

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
  public configEnum = ConfigEnum;

  constructor(public configService: ConfigService) {}

  ngOnInit() {}

  public onChangedControl(key: ConfigEnum, value: boolean) {
    this.configService.setValue(key, value);
  }
}

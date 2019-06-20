import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { StorageService } from './storage.service';

export enum ConfigEnum {
  autostartEnabled,
  audioEnabled,
  mainCycleMinutes,
  breakCycleMinutes
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  defaultConfig: { [key in keyof typeof ConfigEnum]: number | boolean } = {
    audioEnabled: true,
    autostartEnabled: true,
    mainCycleMinutes: 40,
    breakCycleMinutes: 5
  };

  constructor(private storageService: StorageService) {}

  setValue(key: ConfigEnum, value: any) {
    this.storageService.set(ConfigEnum[key], value);
  }

  getValue(key: ConfigEnum): any {
    const value = this.storageService.get(ConfigEnum[key]);
    return isNullOrUndefined(value) ? this.defaultConfig[ConfigEnum[key]] : value;
  }
}

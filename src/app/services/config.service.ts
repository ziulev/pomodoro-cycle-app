import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { StorageService } from './storage.service';

export enum ConfigEnum {
  autostartEnabled = 'autostart',
  audioEnabled = 'audio-enabled'
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private storageService: StorageService) {}

  setValue(key: ConfigEnum, value: boolean) {
    this.storageService.set(key, value);
  }

  getValue(key: ConfigEnum): boolean {
    const value = this.storageService.get(key);
    return isNullOrUndefined(value) ? true : value;
  }
}

import { Injectable } from '@angular/core';
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
    return this.storageService.get(key);
  }
}

import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private autostartStorageKey = 'autostart';

  constructor(private storageService: StorageService) {}

  set autostart(value: boolean) {
    this.storageService.set(this.autostartStorageKey, value);
  }

  get autostart(): boolean {
    return this.storageService.get(this.autostartStorageKey);
  }
}
